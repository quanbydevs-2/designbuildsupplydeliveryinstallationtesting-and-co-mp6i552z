import { z } from "zod"

export const landparcelSchema = z.object({
  id: z.number(),
  parcelName: z.string(),
  area: z.number(),
  soilType: z.string(),
  waterSource: z.string().optional(),
  landUse: z.string(),
  gpsCoordinates: z.string().optional(),
  farmerId: z.number(),
  status: z.string().default("active"),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
})

export type LandParcel = z.infer<typeof landparcelSchema>