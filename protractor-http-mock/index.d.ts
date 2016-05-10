// Type definitions for protractor-http-mock
// Project: https://github.com/atecarlos/protractor-http-mock
// Definitions by: Crevil <https://github.com/Crevil>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="selenium-webdriver" />

declare namespace mock {
    interface ProtractorHttpMock {
        /**
         * Instantiate mock module. This must be done before the browser connects.
         *
         * @param mocks An array of mock modules to load into the application.
         * @param skipDefaults Set true to skip loading of default mocks.
         */
        <T>(mocks?: Array<requests.BaseRequest<T>>, skipDefaults?: boolean): ProtractorHttpMock;

        /**
         * Instantiate mock modules from files. This must be done before the browser connects.
         *
         * @param mocks An array of mock module names relative to the rootDirectory configuration.
         */
        (mocks: Array<string>): ProtractorHttpMock;

        /**
         * Clean up.
         * Typically done in the afterEach call to ensure the teardown
         * is executed regardless of what happens in the test execution.
         */
        teardown(): void;

        /**
         * Returns a promise that will be resolved with an array of
         * all matched HTTP requests.
         */
        requestsMade(): webdriver.promise.Promise<Array<ReceivedRequest>>;

        /**
         * Returns a promise that will be resolved with a true boolean
         * when all matched HTTP requests are cleared.
         */
        clearRequests(): webdriver.promise.Promise<boolean>;

        /**
         * Module configuration to setup
         */
        config: {
            /**
             * Mocks directory where mock files are located.
             * Default: process.cwd()
             */
            rootDirectory?: string;

            /**
             * Path to protractor configuration file.
             * Default: protractor.conf
             */
            protractorConfig?: string;
        };

        /**
         * Add mock dynamically.
         * Returns a promise that will be resolved with a true boolean
         * when mocks have been added.
         *
         * @param mocks An array of mock modules to load into the application.
         */
        add<T>(mocks: Array<requests.BaseRequest<T>>): webdriver.promise.Promise<boolean>;

        /**
         * Remove mock dynamically.
         * Returns a promise that will be resolved with a true boolean
         * when mocks have been removed.
         *
         * @param mocks An array of mock modules to remove from the application.
         */
        remove<T>(mocks: Array<requests.BaseRequest<T>>): webdriver.promise.Promise<boolean>;
    }

    /**
     * Matched request.
     */
    interface ReceivedRequest {
        url: string;
        method: string;
    }

    namespace requests {
        /**
         * Request methods type
         */
        type Method = "GET" | "POST" | "DELETE" | "PUT" | "HEAD" | "PATCH" | "JSONP";

        /**
         * Base request mock used for all mocks.
         */
        interface BaseRequest<TResponse> {
            request: {
                method: Method;
                path: string;
            };
            response: {
                status: number;
                data: TResponse;
            };
        }

        /**
         * GET request mock.
         */
        interface Get<TResponse> extends BaseRequest<TResponse> {
            request: {
                method: Method;
                path: string;
                params?: Object;
                queryString?: Object;
                headers?: Object;
                interceptedRequest?: boolean;
                interceptedAnonymousRequest?: boolean;
            };
            response: {
                status: number;
                data: TResponse;
            };
        }

        /**
         * POST request mock with payload.
         */
        interface PostData<TResponse, TPayload> extends BaseRequest<TResponse> {
            request: {
                path: string;
                method: Method;
                data: TPayload;
            };
            response: {
                status: number;
                data: TResponse;
            };
        }

        /**
         * POST request mock.
         */
        interface Post<TResponse> extends BaseRequest<TResponse> {
            request: {
                path: string;
                method: Method;
            };
            response: {
                status: number;
                data: TResponse;
            };
        }

        /**
         * HEAD request mock.
         */
        interface Head<TResponse> extends BaseRequest<TResponse> {
            request: {
                path: string;
                method: Method;
            };
            response: {
                status: number;
                data: TResponse;
            };
        }

        /**
         * HTTP Delete request mock.
         */
        interface Delete<TResponse> extends BaseRequest<TResponse> {
            request: {
                path: string;
                method: Method;
            };
            response: {
                status: number;
                data: TResponse;
            };
        }

        /**
         * PUT request mock.
         */
        interface Put<TResponse> extends BaseRequest<TResponse> {
            request: {
                path: string;
                method: Method;
            };
            response: {
                status: number;
                data: TResponse;
            };
        }

        /**
         * PATCH request mock.
         */
        interface Patch<TResponse> extends BaseRequest<TResponse> {
            request: {
                path: string;
                method: Method;
            };
            response: {
                status: number;
                data: TResponse;
            };
        }

        /**
         * JSONP request mock.
         */
        interface Jsonp<TResponse> extends BaseRequest<TResponse> {
            request: {
                path: string;
                method: Method;
            };
            response: {
                status: number;
                data: TResponse;
            };
        }
    }
}

declare var mock: mock.ProtractorHttpMock;

declare module "protractor-http-mock" {
    export = mock;
}
