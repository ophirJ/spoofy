export const StringToNumberDuration = (stringDuration: string) => {
  const separatedDuration = stringDuration.split(':');
  return Number(separatedDuration[0]) * 60 + Number(separatedDuration[1]);
};
