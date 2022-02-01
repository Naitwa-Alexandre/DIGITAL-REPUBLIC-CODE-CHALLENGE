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
    return 'As paredes devem ter no minimo 1 metro quadrado e no maximo 15 metros quadrados';
  }
}

const findRootSquad = (args) => ({
  ...args,
  rootSquad: args.width * args.height
});

const inkCalc = (args) => {
  const arrayArgs = Object.values(args);
  const rootSquadPerInk = 5;

  const rootSquadTotal = arrayArgs.map(findRootSquad)
    .reduce((acc, cur) => acc + cur.rootSquad, 0);

  return rootSquadTotal / rootSquadPerInk;
}

export { checkRootSquad, inkCalc };