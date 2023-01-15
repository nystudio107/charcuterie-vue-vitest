TAG?=18-alpine
CONTAINER?=$(shell basename $(CURDIR))
CONTAINER_ID=$(shell docker ps -q -f name="$(CONTAINER)")
IMAGE_INFO=$(shell docker image inspect $(CONTAINER):$(TAG))
DOCKER_RUN=docker container run \
	--name ${CONTAINER} \
	--rm \
	-p 3001:3001 \
	-it \
	-v `pwd`:/app \
	${CONTAINER}:${TAG}

.PHONY: build clean dev image-build image-check ssh test test-coverage npm

# Perform a dist build
build: image-check
ifeq ($(CONTAINER_ID),)
	${DOCKER_RUN} \
		run build
else
	docker exec -it $(CONTAINER) npm run build
endif
# Remove node_modules/ & package-lock.json
clean:
	rm -rf node_modules/
	rm -f package-lock.json
# Run the development server
dev: image-check
ifeq ($(CONTAINER_ID),)
	${DOCKER_RUN} \
		run dev
else
	docker exec -it $(CONTAINER) npm run dev
endif
# Build the Docker image
image-build:
	docker build \
		. \
		-t ${CONTAINER}:${TAG} \
		--build-arg TAG=${TAG} \
		--no-cache
	${DOCKER_RUN} \
		install
# Ensure the container has been created
image-check:
ifeq ($(IMAGE_INFO), [])
image-check: image-build
endif
# ssh into the already running container
ssh:
	docker exec -it $(CONTAINER) /bin/sh
# Run tests via npm run test
test: image-check
ifeq ($(CONTAINER_ID),)
	${DOCKER_RUN} \
		run test
else
	docker exec -it $(CONTAINER) npm run test
endif
# Run tests with coverage via npm run test-coverage
test-coverage: image-check
ifeq ($(CONTAINER_ID),)
	${DOCKER_RUN} \
		run test-coverage
else
	docker exec -it $(CONTAINER) npm run test-coverage
endif
# Run the passed in npm command
npm: image-check
ifeq ($(CONTAINER_ID),)
	${DOCKER_RUN} \
		$(filter-out $@,$(MAKECMDGOALS)) $(MAKEFLAGS)
else
	docker exec -it $(CONTAINER) npm $(filter-out $@,$(MAKECMDGOALS)) $(MAKEFLAGS)
endif
%:
	@:
# ref: https://stackoverflow.com/questions/6273608/how-to-pass-argument-to-makefile-from-command-line
