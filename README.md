# EQ-D by Michael Koswara

This is a simple web application that projects data from the USGS "Past Day" Earthquake API into useful statistics and tabulation. 

[Live site (click here)](https://michaelkoswara.github.io/EQ-D)

(*NOTE: Github Pages' server follows the standard server rules of case sensitivity, therefore the url is case sensitive (ie. /eq-d will not work , only /EQ-D) , due to the limitation of GH-Pages I have not setup a redirection for case-sensitivity*)

**The technologies used:**
- React JS (version 17.0.2 at least)
- TypeScript (for maintainability)
- [Antd UI framework](https://ant.design/)
- Antd chart framework
- Github pages for deployment (live site)

## Local Installation

1. Make sure that Node is installed 
(if the OS is Mac or Linux, use [NVM](https://github.com/nvm-sh/nvm). For Windows, install it from [their website](https://nodejs.org/en/))

2. Clone the repository ( git@github.com:michaelkoswara/EQ-D.git )

3. Run npm install on the very top level directory of the local repo.
```bash
npm install
```
4. Run npm start **(this will serve the app locally at http://localhost:3000/EQ-D/)**
```bash
npm start
```

## Deployment (Github Pages server)

```bash
npm run deploy
```
This will remove the **/build** folder , then run **"npm run build"** which will create a **fresh /build folder**, and then run the GH-Pages specific script which will deploy the contents of the /build folder to the **"gh-pages" branch** of the same remote repo. 

The live site final url is determined by the "homepage" section of package.json

## Contributing

### Formatting & Linting
```bash
npm run lint:fix
```
Run the above command before doing a git-commit . This will identify and fix any linting and formatting issues

### Testing
```bash
npm run test
```
Run the above command before doing a git-commit to identify any unit test errors. 