export interface KnownIssue {
  title: string;
  description: string;
}

export interface RoadmapItem {
  title: string;
  description: string;
  completed: boolean;
}

export interface ParsedRoadmap {
  knownIssues: KnownIssue[];
  featureRequests: RoadmapItem[];
  bugReports: RoadmapItem[];
}

export function parseRoadmap(content: string): ParsedRoadmap {
  const result: ParsedRoadmap = {
    knownIssues: [],
    featureRequests: [],
    bugReports: [],
  };

  let currentSection: keyof ParsedRoadmap | null = null;
  const lines = content.split(/\r?\n/);

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;

    if (trimmed.startsWith("## ")) {
      const heading = trimmed.slice(3).toLowerCase();
      if (heading.includes("know") && heading.includes("issue"))
        currentSection = "knownIssues";
      else if (heading.includes("feature")) currentSection = "featureRequests";
      else if (heading.includes("bug")) currentSection = "bugReports";
      else currentSection = null;
      continue;
    }

    if (!currentSection) continue;

    // Checklist item: - [ ] **Title** — Description or - [x] **Title** — Description
    const checklistMatch = trimmed.match(
      /^-\s*\[([ xX])\]\s*\*\*(.+?)\*\*\s*[—\-]\s*(.+)$/,
    );
    if (checklistMatch) {
      const completed = checklistMatch[1].toLowerCase() === "x";
      const title = checklistMatch[2].trim();
      const description = checklistMatch[3].trim();
      if (currentSection === "featureRequests") {
        result.featureRequests.push({ title, description, completed });
      } else if (currentSection === "bugReports") {
        result.bugReports.push({ title, description, completed });
      }
      continue;
    }

    // Known issue style: - **Title** - Description
    const knownIssueMatch = trimmed.match(/^-\s*\*\*(.+?)\*\*\s*[—\-]\s*(.+)$/);
    if (knownIssueMatch && currentSection === "knownIssues") {
      result.knownIssues.push({
        title: knownIssueMatch[1].trim(),
        description: knownIssueMatch[2].trim(),
      });
    }
  }

  return result;
}
