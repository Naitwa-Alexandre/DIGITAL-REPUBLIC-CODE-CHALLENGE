const checkRootSquad = (args) => {
  const arrayArgs = Object.values(args);
  const resultRootSquad = arrayArgs.map(({ width, height}) => {
    const rootSquad = width * height;
    if (rootSquad < 1 || rootSquad > 15) {
      return false;
    }
    return true;
  }).every(e => e === true);

  if (resultRootSquad) {
    return args;
  } else {
    console.log('As paredes devem ter no minimo 1 metro quadrado e no maximo 15 metros quadrados');
  }
}

const inkCalc = (args) => {
  const arrayArgs = Object.values(args);
}

export { checkRootSquad, inkCalc };