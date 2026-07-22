import { describe, expect, it } from "vitest";
import { profile } from "./content";

describe("profile resume URL", () => {
  it("resolves the resume PDF from the app base path", () => {
    const baseUrl = "https://example.com/portfolio/";

    expect(new URL(profile.resumeUrl, baseUrl).toString()).toBe(
      "https://example.com/portfolio/resume.pdf",
    );
  });
});
