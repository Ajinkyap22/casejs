export const testCases = [
  {
    input: "",
    camelCase: "",
    snakeCase: "",
    pascalCase: "",
    kebabCase: "",
    trainCase: "",
    titleCase: "",
    constantCase: "",
    dotCase: "",
    pathCase: "",
    sentenceCase: "",
    macroCase: "",
    flatCase: "",
    swapCase: "",
    spongeCase: "",
    lowerCase: "",
    upperCase: "",
    cobolCase: "",
  },
  {
    input: "hello world",
    camelCase: "helloWorld",
    snakeCase: "hello_world",
    pascalCase: "HelloWorld",
    kebabCase: "hello-world",
    trainCase: "Hello-World",
    titleCase: "Hello World",
    constantCase: "HELLO_WORLD",
    dotCase: "hello.world",
    pathCase: "hello/world",
    sentenceCase: "Hello world",
    macroCase: "HELLO_WORLD",
    flatCase: "helloworld",
    swapCase: "HELLO WORLD",
    spongeCase: "hElLo WoRlD",
    lowerCase: "hello world",
    upperCase: "HELLO WORLD",
    cobolCase: "HELLO-WORLD",
  },
  {
    input: "hello-world",
    camelCase: "helloWorld",
    snakeCase: "hello_world",
    pascalCase: "HelloWorld",
    kebabCase: "hello-world",
    trainCase: "Hello-World",
    titleCase: "Hello World",
    constantCase: "HELLO_WORLD",
    dotCase: "hello.world",
    pathCase: "hello/world",
    sentenceCase: "Hello world",
    macroCase: "HELLO_WORLD",
    flatCase: "helloworld",
    swapCase: "HELLO-WORLD",
    spongeCase: "hElLo-WoRlD",
    lowerCase: "hello-world",
    upperCase: "HELLO-WORLD",
    cobolCase: "HELLO-WORLD",
  },
  {
    input: "hello_world",
    camelCase: "helloWorld",
    snakeCase: "hello_world",
    pascalCase: "HelloWorld",
    kebabCase: "hello-world",
    trainCase: "Hello-World",
    titleCase: "Hello World",
    constantCase: "HELLO_WORLD",
    dotCase: "hello.world",
    pathCase: "hello/world",
    sentenceCase: "Hello world",
    macroCase: "HELLO_WORLD",
    flatCase: "helloworld",
    swapCase: "HELLO_WORLD",
    spongeCase: "hElLo_WoRlD",
    lowerCase: "hello_world",
    upperCase: "HELLO_WORLD",
    cobolCase: "HELLO-WORLD",
  },
  {
    input: "Hello World",
    camelCase: "helloWorld",
    snakeCase: "hello_world",
    pascalCase: "HelloWorld",
    kebabCase: "hello-world",
    trainCase: "Hello-World",
    titleCase: "Hello World",
    constantCase: "HELLO_WORLD",
    dotCase: "hello.world",
    pathCase: "hello/world",
    sentenceCase: "Hello world",
    macroCase: "HELLO_WORLD",
    flatCase: "helloworld",
    swapCase: "hELLO wORLD",
    spongeCase: "hElLo WoRlD",
    lowerCase: "hello world",
    upperCase: "HELLO WORLD",
    cobolCase: "HELLO-WORLD",
  },
  {
    input: "hello-World",
    camelCase: "helloWorld",
    snakeCase: "hello_world",
    pascalCase: "HelloWorld",
    kebabCase: "hello-world",
    trainCase: "Hello-World",
    titleCase: "Hello World",
    constantCase: "HELLO_WORLD",
    dotCase: "hello.world",
    pathCase: "hello/world",
    sentenceCase: "Hello world",
    macroCase: "HELLO_WORLD",
    flatCase: "helloworld",
    swapCase: "HELLO-wORLD",
    spongeCase: "hElLo-WoRlD",
    lowerCase: "hello-world",
    upperCase: "HELLO-WORLD",
    cobolCase: "HELLO-WORLD",
  },
  {
    input: "hello - world_test",
    camelCase: "helloWorldTest",
    snakeCase: "hello_world_test",
    pascalCase: "HelloWorldTest",
    kebabCase: "hello-world-test",
    trainCase: "Hello-World-Test",
    titleCase: "Hello World Test",
    constantCase: "HELLO_WORLD_TEST",
    dotCase: "hello.world.test",
    pathCase: "hello/world/test",
    sentenceCase: "Hello world test",
    macroCase: "HELLO_WORLD_TEST",
    flatCase: "helloworldtest",
    swapCase: "HELLO - WORLD_TEST",
    spongeCase: "hElLo - WoRlD_tEsT",
    lowerCase: "hello - world_test",
    upperCase: "HELLO - WORLD_TEST",
    cobolCase: "HELLO-WORLD-TEST",
  },
  {
    input: "HelloWorld",
    camelCase: "helloWorld",
    snakeCase: "hello_world",
    pascalCase: "HelloWorld",
    kebabCase: "hello-world",
    trainCase: "Hello-World",
    titleCase: "Hello World",
    constantCase: "HELLO_WORLD",
    dotCase: "hello.world",
    pathCase: "hello/world",
    sentenceCase: "Hello world",
    macroCase: "HELLO_WORLD",
    flatCase: "helloworld",
    swapCase: "hELLOwORLD",
    spongeCase: "hElLoWoRlD",
    lowerCase: "helloworld",
    upperCase: "HELLOWORLD",
    cobolCase: "HELLO-WORLD",
  },
  {
    input: "123hello",
    camelCase: "123hello",
    snakeCase: "123hello",
    pascalCase: "123hello",
    kebabCase: "123hello",
    trainCase: "123hello",
    titleCase: "123hello",
    constantCase: "123HELLO",
    dotCase: "123hello",
    pathCase: "123hello",
    sentenceCase: "123hello",
    macroCase: "123HELLO",
    flatCase: "123hello",
    swapCase: "123HELLO",
    spongeCase: "123hElLo",
    lowerCase: "123hello",
    upperCase: "123HELLO",
    cobolCase: "123HELLO",
  },
  {
    input: "hello123world",
    camelCase: "hello123world",
    snakeCase: "hello123world",
    pascalCase: "Hello123world",
    kebabCase: "hello123world",
    trainCase: "Hello123world",
    titleCase: "Hello123world",
    constantCase: "HELLO123WORLD",
    dotCase: "hello123world",
    pathCase: "hello123world",
    sentenceCase: "Hello123world",
    macroCase: "HELLO123WORLD",
    flatCase: "hello123world",
    swapCase: "HELLO123WORLD",
    spongeCase: "hElLo123WoRlD",
    lowerCase: "hello123world",
    upperCase: "HELLO123WORLD",
    cobolCase: "HELLO123WORLD",
  },
  {
    input: "HELLO_WORLD",
    camelCase: "helloWorld",
    snakeCase: "hello_world",
    pascalCase: "HelloWorld",
    kebabCase: "hello-world",
    trainCase: "Hello-World",
    titleCase: "Hello World",
    constantCase: "HELLO_WORLD",
    dotCase: "hello.world",
    pathCase: "hello/world",
    sentenceCase: "Hello world",
    macroCase: "HELLO_WORLD",
    flatCase: "helloworld",
    swapCase: "hello_world",
    spongeCase: "hElLo_WoRlD",
    lowerCase: "hello_world",
    upperCase: "HELLO_WORLD",
    cobolCase: "HELLO-WORLD",
  },
  {
    input: "__hello__world__",
    camelCase: "helloWorld",
    snakeCase: "hello_world",
    pascalCase: "HelloWorld",
    kebabCase: "hello-world",
    trainCase: "Hello-World",
    titleCase: "Hello World",
    constantCase: "HELLO_WORLD",
    dotCase: "hello.world",
    pathCase: "hello/world",
    sentenceCase: "Hello world",
    macroCase: "HELLO_WORLD",
    flatCase: "helloworld",
    swapCase: "__HELLO__WORLD__",
    spongeCase: "__hElLo__WoRlD__",
    lowerCase: "__hello__world__",
    upperCase: "__HELLO__WORLD__",
    cobolCase: "HELLO-WORLD",
  },
  {
    input: "  hello   world  ",
    camelCase: "helloWorld",
    snakeCase: "hello_world",
    pascalCase: "HelloWorld",
    kebabCase: "hello-world",
    trainCase: "Hello-World",
    titleCase: "Hello World",
    constantCase: "HELLO_WORLD",
    dotCase: "hello.world",
    pathCase: "hello/world",
    sentenceCase: "Hello world",
    macroCase: "HELLO_WORLD",
    flatCase: "helloworld",
    swapCase: "HELLO WORLD",
    spongeCase: "hElLo WoRlD",
    lowerCase: "hello world",
    upperCase: "HELLO WORLD",
    cobolCase: "HELLO-WORLD",
  },
];
