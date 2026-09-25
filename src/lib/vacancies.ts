export type Vacancy = {
  slug: string;
  title: string;
  country: string;
  category: string;
  employmentType: string;
  salaryNote?: string;
  accommodationNote?: string;
  postedDate: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
};

// Add genuine vacancies here. The list stays empty until real listings are supplied.
export const vacancies: Vacancy[] = [];
