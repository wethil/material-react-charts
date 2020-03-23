import Chance from 'chance';


const chance = new Chance();
const brands = ['Apple', 'Xaomi', 'Samsung', 'OnePlus', 'Huawei'];


const getRandomData = () => {
  const getRandomSalesAndSatisfaction = () => chance.integer({ min: 1000000, max: 20000000 });
  const pieChartSections = [10, 15, 15, 25, 35];

  const getDataForLineChart = (brand) => ({
    name: brand,
    sales: getRandomSalesAndSatisfaction(),
    satisfaction: getRandomSalesAndSatisfaction(),
  });

  const getDataForPieChart = (brand, index) => ({
    name: brand,
    value: pieChartSections[index]
  });

  const data = {
    dataForLineChart: brands.map(getDataForLineChart),
    dataForPieChart: brands.map(getDataForPieChart)
  };

  return data;
}
export default getRandomData;