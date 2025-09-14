export type AstroObjectCategory = "planet" | "dwarf planet" | "star";

export class AstroObject {
  name: string;
  category: AstroObjectCategory;
  description: string;
  imagePath: string;

  constructor(name: string, category: AstroObjectCategory, description: string, imagePath: string) {
    this.name = name;
    this.category = category;
    this.description = description;
    this.imagePath = imagePath;
  }
}
