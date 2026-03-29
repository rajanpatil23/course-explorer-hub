

## Plan: Style Blog Highlights Section to Match Other Homepage Sections

### Problem
The Resources/Blog section at the bottom of the homepage looks plain compared to other sections. It lacks the curved top border and proper background treatment that sections like Popular Courses, FAQ, and others use.

### Changes

**File: `src/components/home/BlogHighlights.tsx`**

1. Add curved top border with `rounded-t-[5rem] md:rounded-t-[8rem]` to match sections like Popular Courses
2. Since the preceding FAQ section uses `bg-secondary`, the blog section should use a contrasting background — keeping `bg-background` but adding the curve creates visual flow
3. Increase the max-width constraint from `max-w-5xl` to `max-w-6xl` to better match other sections' content width
4. Add a subtle "View All Articles" button styled like a proper CTA button (using the Button component) instead of a plain text link
5. Optionally add a descriptive subtitle below the heading, matching the pattern used by other sections (sub-label + heading + optional description)

### Technical Details
- Add `rounded-t-[5rem] md:rounded-t-[8rem]` to the section's className
- Widen the grid container from `max-w-5xl` to `max-w-6xl`
- Convert the "View All Articles" link to use the `Button` component for consistency
- Add a subtitle paragraph below the heading like other sections have

