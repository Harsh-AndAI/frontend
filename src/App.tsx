/*
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  Outlet,
  RouterProvider,
  createRouter,
  createRoute,
  createRootRoute,
} from "@tanstack/react-router";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import { Hero } from "./components/home/Hero";
import { Stats } from "./components/home/Stats";
import { About } from "./components/home/About";
import { VisionMission } from "./components/home/VisionMission";
import { Business } from "./components/home/Business";
import { Pillars } from "./components/home/Pillars";
import { CurrentProject } from "./components/home/CurrentProject";

import { AboutPage } from "./components/pages/AboutPage";
import { BusinessPage } from "./components/pages/BusinessPage";
import { ProjectsPage } from "./components/pages/ProjectsPage";
import { ProjectDetailPage } from "./components/pages/ProjectDetailPage";
import { SustainabilityPage } from "./components/pages/SustainabilityPage";
import { LeadershipPage } from "./components/pages/LeadershipPage";
import { CareersPage } from "./components/pages/CareersPage";
import { CareerOpeningsPage } from "./components/pages/CareerOpeningsPage";
import { ContactPage } from "./components/pages/ContactPage";
import { PrivacyPolicyPage } from "./components/pages/PrivacyPolicyPage";
import { TermsOfServicePage } from "./components/pages/TermsOfServicePage";
import { InvestorsPage } from "./components/pages/InvestorsPage";

import { NewsMediaPage } from "./components/pages/NewsMediaPage";


import { JobDetailsPage } from "./components/careers/jobs/JobDetailsPage";

import { ScrollToTop } from "@/components/ScrollToTop";

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

/*
 * Root Route
 *
 * This contains only the router outlet.
 * Header/Footer are moved into the main layout route
 * so JobDetailsPage can exist without them.
 */
const rootRoute = createRootRoute({
  component: () => <Outlet />,
});

/*
 * Main Website Layout
 *
 * All normal website pages use this layout.
 * JobDetailsPage intentionally does NOT use this layout.
 */
const mainLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: "_main",
  component: () => (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />

      <Header />

      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  ),
});

/* =========================
   HOME
========================= */

const indexRoute = createRoute({
  getParentRoute: () => mainLayoutRoute,
  path: "/",
  component: function HomePage() {
    return (
      <>
        <Hero />
        {/* <Stats /> */}
        <About />
        <VisionMission />
        <Business />
        {/* <Pillars /> */}
        {/* <CurrentProject /> */}
      </>
    );
  },
});

/* =========================
   ABOUT
========================= */

const aboutRoute = createRoute({
  getParentRoute: () => mainLayoutRoute,
  path: "/about",
  component: AboutPage,
});

/* =========================
   BUSINESS
========================= */

const businessRoute = createRoute({
  getParentRoute: () => mainLayoutRoute,
  path: "/business",
  component: BusinessPage,
});

/* =========================
   PROJECTS
========================= */

const projectsRoute = createRoute({
  getParentRoute: () => mainLayoutRoute,
  path: "/projects",
  component: ProjectsPage,
});

const projectDetailRoute = createRoute({
  getParentRoute: () => mainLayoutRoute,
  path: "/projects/detail",
  component: ProjectDetailPage,
});

/* =========================
   SUSTAINABILITY
========================= */

const sustainabilityRoute = createRoute({
  getParentRoute: () => mainLayoutRoute,
  path: "/sustainability",
  component: SustainabilityPage,
});

/* =========================
   LEADERSHIP
========================= */

const leadershipRoute = createRoute({
  getParentRoute: () => mainLayoutRoute,
  path: "/leadership",
  component: LeadershipPage,
});

/* =========================
   CAREERS
========================= */

const careersRoute = createRoute({
  getParentRoute: () => mainLayoutRoute,
  path: "/careers",
  component: CareersPage,
});

const careerOpeningsRoute = createRoute({
  getParentRoute: () => mainLayoutRoute,
  path: "/career-openings",
  component: CareerOpeningsPage,
});

/*
 * IMPORTANT:
 *
 * JobDetailsPage is attached directly to rootRoute,
 * NOT mainLayoutRoute.
 *
 * Therefore it has:
 * - No Header
 * - No Footer
 * - No mainLayout wrapper
 */
const jobDetailsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/career-openings/jobs/$jobId",
  component: JobDetailsPage,
});

/* =========================
   CONTACT
========================= */

const contactRoute = createRoute({
  getParentRoute: () => mainLayoutRoute,
  path: "/contact",
  component: ContactPage,
});

/* =========================
   LEGAL
========================= */

const privacyRoute = createRoute({
  getParentRoute: () => mainLayoutRoute,
  path: "/privacy",
  component: PrivacyPolicyPage,
});

const termsRoute = createRoute({
  getParentRoute: () => mainLayoutRoute,
  path: "/terms",
  component: TermsOfServicePage,
});

/* =========================
   INVESTORS
========================= */

const investorsRoute = createRoute({
  getParentRoute: () => mainLayoutRoute,
  path: "/investors",
  component: InvestorsPage,
});

/* =========================
   NEWS & MEDIA
========================= */

const newsMediaRoute = createRoute({
  getParentRoute: () => mainLayoutRoute,
  path: "/news-media",
  component: NewsMediaPage,
});



/* =========================
   ROUTE TREE
========================= */

const routeTree = rootRoute.addChildren([
  mainLayoutRoute.addChildren([
    indexRoute,

    aboutRoute,

    businessRoute,

    projectsRoute,
    projectDetailRoute,

    sustainabilityRoute,

    leadershipRoute,

    careersRoute,
    careerOpeningsRoute,

    contactRoute,

    privacyRoute,
    termsRoute,

    investorsRoute,

    newsMediaRoute,
  ]),

  /*
   * Standalone route
   * No Header / Footer
   */
  jobDetailsRoute,
]);

/* =========================
   CREATE ROUTER
========================= */

const router = createRouter({
  routeTree,
});

/* =========================
   TYPE SAFETY
========================= */

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

/* =========================
   APP
========================= */

export default function App() {
  return <RouterProvider router={router} />;
}