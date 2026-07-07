# TanStack Router & Reown Search Params Bug (MRE)

This repository serves as a Minimal Reproducible Example (MRE) to demonstrate a bug with search parameter parsing in TanStack Router when used in conjunction with Reown's `createAppKit`.

## 🚀 Getting Started

To set up and run the project locally, follow these steps:

1. Clone the repository.
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## 🐛 Steps to Reproduce

1. Launch the application and navigate to the root route in your browser.
2. Append the search parameter `?open=true` or `?open=false` to the URL.
3. Observe your browser's console output. 

**Expected Behavior:** 
The `loader` function in `src/routes/index.tsx` should log `OPEN true` or `OPEN false` corresponding to the provided search parameters.

**Actual Behavior:** 
Regardless of the value provided in the URL, `deps.open` evaluates to `undefined`, and the console outputs `OPEN undefined`.
