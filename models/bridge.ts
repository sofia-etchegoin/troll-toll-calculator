export interface Bridge {
  id: number
  name: string
  location: string
  type: string
  yearBuilt: number
  lengthMeters: string
  lanes?: number | null
  addedByUser: string
  tollCharge: number
  imageUrl: string
  busyness: number
  origin: string | null
  destination: string | null
}
