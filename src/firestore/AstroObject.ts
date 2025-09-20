export type AstroObjectCategory = "planet" | "dwarf planet" | "star";

interface AstroObjectParams {
  name: string;
  category: AstroObjectCategory;
  description: string;
  imagePath: string;
  imageDetailPath: string;
  info: Record<string, string>;
}

export class AstroObject {
  name: string;
  category: AstroObjectCategory;
  description: string;
  imagePath: string;
  imageDetailPath: string;
  info: Record<string, string>;

  constructor(params: AstroObjectParams) {
    this.name = params.name;
    this.category = params.category;
    this.description = params.description;
    this.imagePath = params.imagePath;
    this.imageDetailPath = params.imageDetailPath;
    this.info = params.info;
  }
}
