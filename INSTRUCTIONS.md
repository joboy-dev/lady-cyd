# Church AI — Frontend Structure Instructions

These are the instructions for how the frontend codebase must be structured. Any AI working on this project must follow these rules exactly.

---

## 1. State Management — Use Zustand Only

The frontend uses **Zustand** for state management. Redux is not used and must not be introduced. Do not use `useDispatch`, `useSelector`, `configureStore`, `createSlice`, or any Redux/react-redux API anywhere.

---

## 2. Slice Structure — One Folder per Domain

Every backend API domain that the frontend communicates with gets its own folder under `src/slices/`. Each folder contains exactly two files:

```
src/slices/<domain>/
  service.ts   ← all API calls for this domain (uses the API utility)
  store.ts     ← Zustand store for this domain's state
```

**Example:**
```
src/slices/bible-lookup/
  service.ts
  store.ts

src/slices/dashboard/
  service.ts
  store.ts

src/slices/auth/
  service.ts
  store.ts
```

The `service.ts` file handles all HTTP calls. The `store.ts` file holds state and calls the service. Components import from the store, not the service directly.

---

## 3. API Calls — Use the API Utility, Never `fetch`

All HTTP requests must go through the shared `API` utility (`src/lib/utils/API.ts`), which is an axios instance. Never use `fetch()` or raw `axios` directly in components or slices.

```ts
// CORRECT
import API from '../../lib/utils/API';
const response = await API.get('/bible/books');

// WRONG
const response = await fetch('/bible/books');
const response = await axios.get('/bible/books');
```

---

## 4. Form Handling — Use Zod + useZodForm

All forms must use the `useZodForm` hook (`src/lib/hooks/form.tsx`) with a Zod validator schema. Validators live in `src/lib/validators/` with one file per domain.

```ts
// src/lib/validators/bible.ts
import { z } from 'zod';
export const verseSearchSchema = z.object({ ... });
export type VerseSearchFormData = z.infer<typeof verseSearchSchema>;
```

```tsx
// In the component
import { useZodForm } from '../../lib/hooks/form';
import { verseSearchSchema } from '../../lib/validators/bible';

const methods = useZodForm(verseSearchSchema);
```

Do not use uncontrolled forms, plain `useState` for form fields, or any other form library.

---

## 5. Components — Use What Exists, Don't Duplicate

Before writing any UI element, check `src/partials/components/shared/` for an existing component. Use the correct existing component rather than writing inline HTML or a new one-off component.

If a required component does not exist, create it in the appropriate place:
- `src/partials/components/shared/` — for components reusable across the whole app
- `src/partials/components/<feature>/` — for components specific to one feature area

---

## 6. Separation of Concerns by Feature Domain

Features must not be mixed together in the same file or folder. Each feature area has its own dedicated files/folders in pages, partials, and slices.

For example, "Bible search" and "verse detection" are separate features — they must have separate pages, separate slice folders, and separate components. Do not put logic for one feature inside another feature's files.

---

## 7. Comments — Add Them to All Code

All files must have JSDoc comments and inline comments on non-obvious logic. Add comments when writing new code and when modifying existing code. This applies to both new files and any file that is edited.

---

## 8. Folder Reference

```
src/
  pages/                        # Full-page route components (one file per page)
  partials/
    components/
      shared/                   # Reusable components (buttons, modals, inputs, etc.)
      operator-dashboard/       # Components specific to the operator dashboard
      projection/               # Components specific to the projection screen
    layouts/                    # Layout wrapper components
  lib/
    utils/                      # Pure utility functions (no React, no hooks)
    hooks/                      # Custom React hooks
    interfaces/                 # TypeScript interfaces, one file per domain
    validators/                 # Zod schemas, one file per domain
    constants/                  # Static data, mappings, and config objects
  slices/                       # Zustand stores + service files (one folder per domain)
  routes/                       # Route guard components
```
