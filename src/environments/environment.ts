// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

/*************for generating build for dev , live and qa *********************/
//ng build --configuration=qa
//ng build --configuration=dev
//ng build --configuration=prod
//python -m SimpleHTTPServer 7000

export const environment = {
  production: false,
  api_url:'https://api.qa.com/1.0/',
  image_url:'https://api.qa.com/1.0/image/avatar/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
