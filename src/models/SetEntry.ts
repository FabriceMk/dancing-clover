/**
 * Represents a Set Dance entry with general metadata.
 */
export class SetEntry {
  /** Unique identifier of the dance set. */
  id: string;

  /** Name of the dance set. */
  name: string;

  /** Alternative names of the dance set. */
  alternativeNames: string[];

  /** The number of figures in the dance set. */
  figuresCount: number;

  /** Styles present in the dance set. */
  styles: string[];

  constructor(
    id: string,
    name: string,
    alternativeNames: string[],
    figuresCount: number,
    styles: string[]
  ) {
    this.id = id;
    this.name = name;
    this.alternativeNames = alternativeNames;
    this.figuresCount = figuresCount;
    this.styles = styles;

  }
}