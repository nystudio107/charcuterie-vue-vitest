TAG?=18-alpine
CONTAINER?=$(shell basename $(CURDIR))
IMAGE_INFO=$(shell docker image inspect $(CONTAINER):$(TAG))
IMAGE_NAME=${CONTAINER}:${TAG}
DOCKER_RUN=docker container run --rm -it -v `pwd`:/app

.PHONY: build clean dev image-build image-check npm ssh test test-coverage

# Perform a dist build via npm run build
build: image-check
	${DOCKER_RUN} --name ${CONTAINER}-$@ ${IMAGE_NAME} run build
# Remove node_modules/ & package-lock.json
clean:
	rm -rf node_modules/
	rm -f package-lock.json
# Run the development server via npm run dev
dev: image-check
	${DOCKER_RUN} --name ${CONTAINER}-$@ -p 3000:3000 ${IMAGE_NAME} run dev
# Build the Docker image & run npm install
image-build:
	docker build . -t ${IMAGE_NAME} --build-arg TAG=${TAG} --no-cache
	${DOCKER_RUN} --name ${CONTAINER}-$@ ${IMAGE_NAME} install
# Ensure the image has been created
image-check:
ifeq ($(IMAGE_INFO), [])
image-check: image-build
endif
# Run the passed in npm command
npm: image-check
	${DOCKER_RUN} --name ${CONTAINER}-$@ ${IMAGE_NAME} $(filter-out $@,$(MAKECMDGOALS)) $(MAKEFLAGS)
# Open a shell inside of the container
ssh: image-check
	${DOCKER_RUN} --name ${CONTAINER}-$@ --entrypoint=/bin/sh ${IMAGE_NAME}
# Run tests via npm run test
test: image-check
	${DOCKER_RUN} --name ${CONTAINER}-$@ ${IMAGE_NAME} run test
# Run tests with coverage via npm run test-coverage
test-coverage: image-check
	${DOCKER_RUN} --name ${CONTAINER}-$@ ${IMAGE_NAME} run test-coverage
# Run tests with the Vitest UI via npm run test-ui
test-ui: image-check
	${DOCKER_RUN} --name ${CONTAINER}-$@ -p 51204:51204 ${IMAGE_NAME} run test-ui
%:
	@:
# ref: https://stackoverflow.com/questions/6273608/how-to-pass-argument-to-makefile-from-command-line
