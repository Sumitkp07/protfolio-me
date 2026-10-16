import { useQuery } from '@tanstack/react-query'
import { portfolioQueryOptions } from '@/features/portfolio/hooks/usePortfolio'
import type { Portfolio } from '@/features/portfolio/types/portfolio'

const usePortfolioSection = <T>(select: (portfolio: Portfolio) => T) =>
  useQuery({ ...portfolioQueryOptions, select }).data

export const useProfile = () => usePortfolioSection((portfolio) => portfolio.profile)
export const useExperiences = () => usePortfolioSection((portfolio) => portfolio.experiences) ?? []
export const useProjects = () => usePortfolioSection((portfolio) => portfolio.projects) ?? []
export const useSkillCategories = () => usePortfolioSection((portfolio) => portfolio.skill_categories) ?? []
export const useEducations = () => usePortfolioSection((portfolio) => portfolio.educations) ?? []
