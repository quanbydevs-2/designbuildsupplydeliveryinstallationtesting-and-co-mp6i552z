import { z } from "zod"

export const cropSchema = z.object({
  id: z.number(),
  cropType: z.string(),
  variety: z.string(),
  plantingDate: z.date(),
  plantedArea: z.number(),
  expectedYield: z.number().optional(),
  actualYield: z.number().optional(),
  farmerId: z.number(),
  parcelId: z.number(),
  status: z.string().default("active"),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
})

export type Crop = z.infer<typeof cropSchema>