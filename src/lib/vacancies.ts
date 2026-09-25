import type { CategoryIcon, CountryId } from "@/lib/site-data";

export type Vacancy = {
  slug: string;
  title: string;
  country: CountryId;
  category: CategoryIcon;
  employmentType: string;
  salaryNote?: string;
  accommodation?: string;
  postedOn: string; // ISO date, e.g. "2026-10-01"
  summary: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits?: string[];
  image?: string;
};

export const employmentTypes = ["Full Time", "Contract", "Seasonal"] as const;

// Add genuine vacancies here. The list stays empty until real listings are supplied.
export const vacancies: Vacancy[] = [];

export function getVacancy(slug: string) {
  return vacancies.find((v) => v.slug === slug);
}
