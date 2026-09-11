// Static GitHub fallback — portfolio must not depend on live API availability.
import type { GithubStats } from "@/types";

export const githubStats: GithubStats = {
  username: "[ADD GITHUB USERNAME]",
  publicRepos: 0,
  followers: 0,
  featuredRepos: [
    {
      name: "[ADD REPO]",
      description: "Replace with a featured repository description.",
      language: "Python",
      stars: 0,
      url: "[ADD LINK]",
    },
  ],
};
