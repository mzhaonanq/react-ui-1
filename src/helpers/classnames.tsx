const classnames = (...names: (string | undefined)[]) => {
  return names.filter(v => v).join(' ');
};
export {classnames};