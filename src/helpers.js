export const reduceToStats = (data, column) => {
  const statObj = {};

  // construct statObj
  for (let i = 0; i < data.length; i++) {
    const user = data[i];
    const { salary } = user;
    const col = user[column];
    
    if (statObj[col] === undefined) {
      statObj[col] = `${salary}`;
    } else {
      statObj[col] += `,${salary}`;
    }
  }

  const averageObj = {};
  for (const key in statObj) {
    const salaryArr = statObj[key].split(',').map(salary => Number(salary));
    const sum = salaryArr.reduce((a, b) => a + b, 0);
    const avg = (sum / salaryArr.length) || 0;
    averageObj[key] = avg;
  }

  const genericArr = Object.keys(averageObj).map(eachItem => {
    return {
      title: eachItem,
      averageSalary: averageObj[eachItem]
    }
  })

  return genericArr;
};