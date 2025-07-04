# Ipconfig

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.1.

## Thank You IpConfig!!

This was a fun little project. Thanks for your consideration!

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Taylor Series Expansion of PI

I had to ask for help on this. Something I haven't seen since college:

```bash
    for (let i = 1; i <= 20; i++) {
      let estimate = 0;
      for (let k = 0; k < i; k++) {
        estimate += Math.pow(-1, k) / (2 * k + 1);
      }
      estimate *= 4;

      let error = Math.abs(Math.PI - estimate);

      console.log(`Iteration ${i}: Estimate = ${estimate}, Error = ${error}`);
    }
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```
