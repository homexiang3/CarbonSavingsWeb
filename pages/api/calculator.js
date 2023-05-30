// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ electricity: 0.273,
                          naturalGas:2.124,
                          diesel:2.883,
                          glp:2.985,
                          propane:2.94,
                          butane:2.96,
                          wood:1.747,
                          coal:2.667,
                          gasolineCar:0.18855,
                          dieselCar:0.15525,
                          motorcycle:0.11314,
                          train:0.03258,
                          underground:0.0566,
                          bus:0.07392,
                          flight:0.15,
                          beefLamb:28.32,
                          shellfish:14.71,
                          omeats:4.82,
                          fish:4.41,
                          milkYoghurt:1.4,
                          cheeseButter:10.19,
                          fvc:0.5
                         })
}
