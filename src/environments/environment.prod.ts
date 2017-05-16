import {prodEnv} from './environments.local'
/**
* These environment files are consumed by the Angular CLI build tool (e.g. 'ng build', 'ng serve')
* The ng build targets will apply the environment file of the same name. 
* This environment will be consumed by the commonly used commands: 
*     ng build -prod --aot -oh=all
*     ng serve -prod --host 0.0.0.0 -p 4200
*  And, generally, any ng * command with the -prod flag.
* 
* This file does not contain sensitive information and can be committed to version control.
*/
export const environment = prodEnv