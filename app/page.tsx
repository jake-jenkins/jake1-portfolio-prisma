import Image from "next/image";
import { getCategory } from "@/lib/actions";
import { H2, P } from "@/app/components/Typography";
import CategoryCard from "@/app/components/CategoryCard";
import Hero from "./components/Hero";

export default async function Home() {
  const categories = await getCategory();

  return (
    <>
      <Hero title="Delivering awesome web experiences." xL />

      <div className="grid grid-cols-1 gap-8 my-12 lg:grid-cols-2 xl:grid-cols-3">
        {categories.map((category: any) => (
          <CategoryCard key={category.slug} category={category} />
        ))}
      </div>

      <div className="my-12">
        <H2>Welcome</H2>
        <P>
          Jake Jenkins is a Lead Front end Developer with a range of skills and expertise
          to help businesses transform their online presence to help become
          market leaders. Jake has proven experience of delivering excellent
          user experience and meeting complex business challenges to deliver
          cutting edge services.
        </P>
      </div>

      <div className="my-12">
        <H2>Expertise</H2>
        <div className="grid grid-cols-1 gap-2 mb-8 mt-4 lg:grid-cols-2 xl:grid-cols-3">
          <ul className="list-disc list-inside">
            <li>Front end architecture and frameworks</li>
            <li>NextJs</li>
            <li>NodeJs</li>
            <li>HTML, CSS and JavaScript</li>
          </ul>
          <ul className="list-disc list-inside">
            <li>Web API</li>
            <li>Prisma and relational databases (ORM)</li>
            <li>Authentication</li>
            <li>Content management systems</li>
          </ul>
          <ul className="list-disc list-inside">
            <li>Web security</li>
            <li>Multi-lingual support</li>
            <li>DevOps and deployment</li>
            <li>Cloud</li>
          </ul>
        </div>
      </div>

      <H2>Production code trusted by</H2>
      <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="flex justify-center items-center h-16 border py-16 rounded-2xl border-slate-400">
          <svg viewBox="0 0 46.344 50" width="46.344pt" height="50pt">
            <defs>
              <clipPath id="_clipPath_LuVP7bcW70ndcGTdkJYNnGBKHuQXVWrA">
                <rect width="46.344" height="50" />
              </clipPath>
            </defs>
            <g clipPath="url(#_clipPath_LuVP7bcW70ndcGTdkJYNnGBKHuQXVWrA)">
              <path
                d=" M 42.247 9.189 C 43.6 9.229 44.674 10.343 44.674 11.696 C 44.674 13.048 43.56 14.162 42.207 14.122 C 40.855 14.082 39.781 12.968 39.781 11.616 C 39.781 10.263 40.894 9.189 42.247 9.189 L 42.247 9.189 Z  M 36.598 5.927 C 37.951 5.927 39.065 7.001 39.065 8.354 C 39.065 9.706 37.991 10.82 36.598 10.82 C 35.206 10.82 34.132 9.746 34.132 8.394 C 34.172 7.041 35.246 5.927 36.598 5.927 L 36.598 5.927 Z  M 30.392 7.916 C 31.745 7.916 32.859 9.03 32.859 10.383 C 32.859 11.735 31.745 12.849 30.392 12.849 C 29.04 12.849 27.926 11.735 27.926 10.383 C 27.926 8.99 29.04 7.877 30.392 7.916 L 30.392 7.916 Z  M 18.737 5.609 L 18.737 3.302 C 19.294 3.461 19.811 3.62 20.288 3.779 C 20.686 3.899 21.084 4.058 21.482 4.137 C 21.641 4.177 21.879 4.177 21.959 4.097 C 22.038 3.978 22.078 3.739 22.038 3.58 C 21.72 2.466 21.362 1.392 21.004 0.278 C 20.964 0.199 20.964 0.119 20.925 0 L 25.38 0 C 24.982 1.193 24.624 2.347 24.266 3.501 C 24.226 3.66 24.187 3.978 24.306 4.058 C 24.386 4.177 24.704 4.177 24.863 4.097 C 25.738 3.859 26.613 3.58 27.528 3.262 L 27.528 7.837 C 26.494 7.28 25.499 6.763 24.306 6.166 C 24.266 6.484 24.187 6.763 24.266 6.962 L 25.857 11.855 C 26.414 13.565 25.499 15.196 23.789 15.634 C 21.68 16.191 19.691 14.241 20.288 12.133 C 20.765 10.383 21.402 8.712 21.959 6.962 C 22.038 6.763 21.959 6.484 21.919 6.166 C 20.765 6.763 19.771 7.28 18.697 7.877 C 18.737 7.081 18.737 6.365 18.737 5.609 L 18.737 5.609 L 18.737 5.609 Z  M 15.952 7.916 C 17.305 7.916 18.418 9.03 18.418 10.383 C 18.418 11.735 17.265 12.849 15.952 12.849 C 14.599 12.849 13.486 11.735 13.486 10.383 C 13.486 8.99 14.599 7.916 15.952 7.916 L 15.952 7.916 L 15.952 7.916 Z  M 9.706 5.927 C 11.059 5.927 12.173 7.001 12.173 8.394 C 12.173 9.746 11.099 10.86 9.706 10.86 C 8.354 10.86 7.24 9.746 7.24 8.394 C 7.24 7.041 8.354 5.967 9.706 5.927 L 9.706 5.927 Z  M 8.195 27.051 C 7.32 26.613 6.643 26.017 5.609 26.017 C 6.405 27.608 7.24 29.04 8.911 29.756 C 10.741 30.512 12.571 29.119 12.332 27.25 C 12.213 26.534 11.775 25.897 11.178 25.778 C 10.661 25.659 10.144 25.937 9.706 26.653 C 9.667 26.733 9.587 26.812 9.508 26.971 C 9.11 26.056 8.831 25.221 9.348 24.386 C 9.945 23.431 10.9 23.51 12.054 23.789 C 9.746 21.442 9.428 19.055 11.457 16.509 C 12.531 17.384 13.446 18.299 13.764 19.652 C 14.082 21.004 13.605 22.237 13.167 23.59 C 14.082 22.953 14.958 22.476 15.912 23.272 C 16.549 23.789 16.708 24.863 16.27 25.977 C 16.111 25.778 15.952 25.579 15.793 25.42 C 15.117 24.823 14.321 25.022 13.923 25.818 C 13.486 26.733 13.764 27.807 14.639 28.523 C 15.674 29.398 16.947 29.637 18.259 29.597 C 18.578 29.597 18.856 29.557 19.174 29.477 C 21.163 29.08 22.158 27.886 22.317 25.818 C 22.357 25.46 22.357 25.102 22.397 24.664 C 20.646 24.783 19.652 25.977 18.578 27.21 C 18.418 25.3 18.259 23.51 18.1 21.68 C 18.776 22.118 19.373 22.595 20.089 22.914 C 20.765 23.192 21.561 23.311 22.317 23.391 C 21.76 21.8 20.726 20.646 19.691 19.333 L 26.733 19.333 C 26.215 20.01 25.698 20.606 25.261 21.283 C 24.823 21.919 24.425 22.595 23.948 23.351 C 25.738 23.391 27.091 22.755 28.324 21.521 C 28.165 23.51 28.006 25.3 27.846 27.21 C 26.772 25.977 25.778 24.783 24.067 24.664 C 23.948 28.204 25.579 29.676 28.841 29.597 C 29.756 29.557 30.631 29.318 31.427 28.801 C 32.262 28.244 32.779 27.488 32.66 26.454 C 32.58 25.857 32.381 25.34 31.785 25.141 C 31.188 24.903 30.75 25.261 30.392 25.698 C 30.353 25.778 30.273 25.818 30.194 25.897 C 29.716 25.102 29.875 23.829 30.512 23.272 C 31.188 22.635 32.103 22.755 33.376 23.709 C 32.103 20.805 32.381 18.379 35.007 16.549 C 36.598 18.538 37.195 20.885 34.45 23.829 C 35.484 23.55 36.439 23.471 37.076 24.425 C 37.632 25.261 37.354 26.136 36.956 27.051 C 36.757 26.812 36.638 26.573 36.479 26.414 C 35.803 25.619 34.888 25.698 34.37 26.613 C 33.933 27.369 34.012 28.443 34.53 29.159 C 35.126 29.955 36.2 30.313 37.195 30.034 C 38.11 29.756 38.826 29.199 39.383 28.443 C 39.9 27.767 40.338 27.011 40.775 26.255 C 39.781 26.176 39.065 26.733 38.229 27.25 C 38.786 25.46 39.263 23.749 39.781 22.038 C 40.258 22.993 40.696 23.948 41.133 24.863 L 41.332 24.783 C 41.809 23.669 41.491 22.516 41.332 21.322 C 42.446 21.72 43.52 22.118 44.634 22.476 C 44.515 22.635 44.475 22.755 44.395 22.874 C 42.327 25.818 41.133 29.159 40.178 32.58 C 40.059 32.978 39.94 33.376 39.86 33.774 C 39.82 34.211 39.582 34.251 39.184 34.211 C 33.257 33.376 27.329 33.058 21.322 33.177 C 16.628 33.257 11.934 33.535 7.24 34.211 C 6.802 34.291 6.604 34.211 6.484 33.734 C 5.728 30.591 4.734 27.528 3.103 24.704 C 2.705 23.988 2.228 23.272 1.75 22.476 C 2.824 22.078 3.899 21.72 5.052 21.283 C 4.893 22.476 4.615 23.63 5.092 24.823 C 5.848 23.988 6.206 22.993 6.604 21.999 C 7.121 23.55 7.638 25.261 8.195 27.051 L 8.195 27.051 L 8.195 27.051 Z  M 4.137 9.189 C 5.49 9.189 6.564 10.303 6.564 11.656 C 6.564 13.008 5.45 14.122 4.097 14.122 C 2.745 14.122 1.631 13.008 1.631 11.656 C 1.671 10.303 2.785 9.189 4.137 9.189 L 4.137 9.189 L 4.137 9.189 Z  M 0 17.862 C 0 16.509 1.114 15.395 2.466 15.395 C 3.819 15.395 4.933 16.469 4.933 17.862 C 4.933 19.214 3.859 20.288 2.466 20.288 C 1.114 20.328 0 19.214 0 17.862 L 0 17.862 Z  M 9.15 49.805 L 7.678 49.805 C 7.678 49.567 7.638 49.288 7.638 48.97 C 6.763 49.845 5.768 50.084 4.654 49.925 C 2.904 49.646 1.671 48.373 1.392 46.543 C 1.233 45.509 1.313 44.515 1.711 43.52 C 2.387 42.048 3.54 41.253 5.132 41.133 C 6.882 41.014 8.235 41.73 8.99 43.082 C 8.473 43.361 7.996 43.639 7.558 43.878 C 7.2 43.52 6.922 43.162 6.524 42.923 C 5.45 42.287 4.058 42.685 3.501 43.798 C 2.944 44.952 2.944 46.146 3.501 47.259 C 4.058 48.333 5.37 48.731 6.444 48.214 C 7.081 47.896 7.399 47.379 7.399 46.504 L 5.251 46.504 L 5.251 45.111 L 9.11 45.111 C 9.15 46.663 9.15 48.214 9.15 49.805 L 9.15 49.805 L 9.15 49.805 Z  M 16.31 49.487 C 14.838 50.243 13.366 50.163 11.974 49.248 C 10.741 48.413 10.263 47.18 10.184 45.748 C 10.065 43.679 11.178 41.889 12.968 41.292 C 15.872 40.338 18.498 42.327 18.458 45.986 C 18.418 47.22 17.862 48.692 16.31 49.487 L 16.31 49.487 L 16.31 49.487 Z  M 21.482 49.845 C 21.362 49.845 21.163 49.726 21.163 49.606 C 20.368 46.822 19.572 44.077 18.776 41.213 C 19.373 41.213 19.93 41.173 20.487 41.213 C 20.606 41.213 20.805 41.451 20.845 41.611 C 21.362 43.48 21.84 45.35 22.317 47.22 C 22.357 47.299 22.357 47.419 22.516 47.538 C 23.033 45.469 23.59 43.361 24.107 41.253 L 26.056 41.253 C 25.221 44.157 24.425 46.981 23.63 49.845 L 21.482 49.845 L 21.482 49.845 Z  M 27.051 49.964 C 26.414 49.964 25.937 49.447 25.937 48.811 C 25.937 48.174 26.454 47.657 27.051 47.697 C 27.648 47.697 28.165 48.254 28.125 48.851 C 28.125 49.447 27.648 49.964 27.051 49.964 L 27.051 49.964 Z  M 36.121 42.128 L 36.121 46.543 C 36.121 48.493 35.007 49.766 33.097 49.885 C 32.342 49.925 31.546 49.805 30.83 49.527 C 29.796 49.129 29.119 48.294 29.08 47.14 C 29 45.31 29.04 43.44 29.04 41.611 C 29.04 41.491 29.04 41.372 29.08 41.213 L 30.83 41.213 L 30.83 46.543 C 30.83 47.975 31.904 48.731 33.257 48.294 C 33.973 48.055 34.37 47.458 34.37 46.583 L 34.37 41.213 L 36.121 41.213 L 36.121 42.128 L 36.121 42.128 Z  M 42.844 49.845 C 42.685 49.845 42.526 49.646 42.446 49.527 C 41.77 48.373 41.093 47.259 40.377 46.026 C 39.86 46.663 39.104 47.06 39.263 48.055 C 39.343 48.652 39.263 49.248 39.263 49.845 L 37.513 49.845 L 37.513 41.253 L 39.224 41.253 L 39.224 44.793 L 39.343 44.833 C 40.019 44.037 40.775 43.281 41.332 42.406 C 41.969 41.451 42.724 41.054 43.838 41.253 C 43.997 41.292 44.196 41.253 44.475 41.253 C 43.639 42.207 42.884 43.082 42.088 43.958 C 41.451 44.674 41.451 44.674 41.969 45.509 C 42.844 46.941 43.719 48.373 44.674 49.885 L 42.844 49.845 L 42.844 49.845 Z  M 43.878 20.328 C 42.486 20.328 41.412 19.294 41.412 17.901 C 41.412 16.509 42.486 15.435 43.838 15.435 C 45.231 15.435 46.305 16.509 46.344 17.862 C 46.344 19.214 45.231 20.328 43.878 20.328 L 43.878 20.328 L 43.878 20.328 Z  M 16.589 44.873 C 16.429 43.6 15.594 42.724 14.48 42.645 C 13.327 42.565 12.412 43.242 12.093 44.475 C 11.894 45.27 11.894 46.066 12.173 46.862 C 12.491 47.856 13.287 48.453 14.281 48.453 C 15.316 48.453 16.071 47.896 16.429 46.901 C 16.549 46.504 16.589 46.066 16.668 45.628 L 16.628 45.628 C 16.628 45.35 16.628 45.111 16.589 44.873 L 16.589 44.873 Z "
                fillRule="evenodd"
                fill="currentColor"
              />
            </g>
          </svg>
        </div>

        <div className="flex justify-center items-center h-16 border py-16 rounded-2xl border-slate-400">
          <svg viewBox="0 0 99.33 40" width="99.33pt" height="40pt">
            <defs>
              <clipPath id="_clipPath_HmNbHv4xB3sOyV5zDFSpysY5WocqrcHj">
                <rect width="99.33" height="40" />
              </clipPath>
            </defs>
            <g clipPath="url(#_clipPath_HmNbHv4xB3sOyV5zDFSpysY5WocqrcHj)">
              <g>
                <path
                  d=" M 39.934 3.858 L 33.077 36.053 L 22.317 36.053 L 15.554 13.774 L 15.461 13.774 L 10.963 36.053 L 2.8 36.053 L 9.712 3.858 L 20.51 3.858 L 27.14 26.187 L 27.234 26.187 L 31.776 3.858 L 39.934 3.858 L 39.934 3.858 L 39.934 3.858 Z  M 70.712 3.858 L 63.988 36.053 L 55.323 36.053 L 58.2 22.263 L 47.948 22.263 L 45.076 36.053 L 36.411 36.053 L 43.136 3.858 L 51.801 3.858 L 49.254 16.177 L 59.495 16.177 L 62.047 3.858 L 70.712 3.858 L 70.712 3.858 Z  M 99.33 40 L 99.33 0 L 0 0 L 0 40 L 99.33 40 L 99.33 40 L 99.33 40 Z  M 95.609 4.735 L 93.52 11.145 C 91.85 10.368 89.579 9.673 86.383 9.673 C 82.954 9.673 80.171 10.175 80.171 12.766 C 80.171 17.329 92.732 15.626 92.732 25.404 C 92.732 34.301 84.431 36.61 76.924 36.61 C 73.589 36.61 69.737 35.822 66.914 34.946 L 68.954 28.397 C 70.663 29.505 74.102 30.244 76.924 30.244 C 79.614 30.244 83.83 29.737 83.83 26.413 C 83.83 21.248 71.269 23.183 71.269 14.105 C 71.269 5.799 78.594 3.307 85.688 3.307 C 89.679 3.307 93.427 3.726 95.609 4.735 Z "
                  fillRule="evenodd"
                  fill="currentColor"
                />
              </g>
            </g>
          </svg>
        </div>

        <div className="flex justify-center items-center h-16 border py-16 rounded-2xl border-slate-400 ">
          <svg viewBox="0 0 141.806 20" width="141.806pt" height="20pt">
            <defs>
              <clipPath id="_clipPath_BS3HgyCAKeySFREIpAcuqdC8DystfPMG">
                <rect width="141.806" height="20" />
              </clipPath>
            </defs>
            <g clipPath="url(#_clipPath_BS3HgyCAKeySFREIpAcuqdC8DystfPMG)">
              <path
                d=" M 22.258 7.548 C 22.645 7.548 23.032 7.548 23.42 7.484 C 23.807 7.419 24.129 7.29 24.387 7.161 C 24.645 6.968 24.903 6.774 25.097 6.452 C 25.29 6.129 25.355 5.742 25.355 5.226 C 25.355 4.71 25.29 4.323 25.097 4 C 24.903 3.677 24.71 3.419 24.387 3.29 C 24.129 3.097 23.807 3.032 23.42 2.968 C 23.032 2.903 22.645 2.903 22.258 2.903 L 19.549 2.903 L 19.549 7.677 L 22.258 7.677 L 22.258 7.548 Z  M 23.226 0 C 24.258 0 25.097 0.129 25.807 0.452 C 26.516 0.774 27.097 1.097 27.549 1.613 C 28 2.129 28.323 2.645 28.516 3.226 C 28.71 3.806 28.839 4.452 28.839 5.161 C 28.839 5.806 28.71 6.452 28.516 7.032 C 28.323 7.677 28 8.194 27.549 8.71 C 27.097 9.161 26.516 9.548 25.807 9.871 C 25.097 10.194 24.258 10.323 23.226 10.323 L 19.549 10.323 L 19.549 16.065 L 16 16.065 L 16 0 L 23.226 0 Z  M 49.097 10.323 C 48.968 10.452 48.774 10.516 48.581 10.581 C 48.387 10.645 48.194 10.71 47.936 10.774 C 47.678 10.839 47.484 10.839 47.226 10.903 C 46.968 10.903 46.71 10.968 46.452 11.032 C 46.194 11.097 46 11.161 45.742 11.226 C 45.484 11.29 45.29 11.419 45.161 11.548 C 44.968 11.677 44.839 11.806 44.774 12 C 44.645 12.194 44.645 12.452 44.645 12.71 C 44.645 12.968 44.71 13.226 44.774 13.419 C 44.903 13.613 45.032 13.742 45.226 13.871 C 45.42 14 45.613 14.065 45.871 14.129 C 46.129 14.194 46.387 14.194 46.581 14.194 C 47.226 14.194 47.678 14.065 48.065 13.871 C 48.387 13.677 48.645 13.419 48.839 13.097 C 49.032 12.774 49.097 12.516 49.161 12.194 C 49.226 11.871 49.226 11.677 49.226 11.484 L 49.226 10.323 L 49.097 10.323 Z  M 41.742 8 C 41.807 7.226 42 6.645 42.323 6.129 C 42.645 5.613 43.097 5.226 43.549 4.968 C 44.065 4.645 44.645 4.452 45.29 4.323 C 45.936 4.194 46.581 4.129 47.226 4.129 C 47.807 4.129 48.387 4.194 48.968 4.258 C 49.549 4.323 50.129 4.516 50.581 4.71 C 51.097 4.968 51.484 5.29 51.807 5.677 C 52.129 6.129 52.258 6.645 52.258 7.355 L 52.258 13.355 C 52.258 13.871 52.258 14.387 52.323 14.839 C 52.387 15.29 52.516 15.677 52.645 15.935 L 49.42 15.935 C 49.355 15.742 49.29 15.548 49.29 15.355 C 49.226 15.161 49.226 14.968 49.226 14.774 C 48.71 15.29 48.129 15.677 47.42 15.871 C 46.71 16.065 46 16.194 45.29 16.194 C 44.71 16.194 44.194 16.129 43.742 16 C 43.29 15.871 42.839 15.677 42.516 15.355 C 42.129 15.097 41.871 14.71 41.678 14.258 C 41.484 13.806 41.355 13.29 41.355 12.71 C 41.355 12.065 41.484 11.484 41.678 11.097 C 41.936 10.645 42.194 10.323 42.581 10.065 C 42.968 9.806 43.355 9.613 43.807 9.484 C 44.258 9.355 44.774 9.226 45.226 9.161 C 45.678 9.097 46.194 9.032 46.645 8.968 C 47.097 8.903 47.549 8.839 47.871 8.774 C 48.258 8.71 48.516 8.581 48.71 8.387 C 48.903 8.194 49.032 7.935 49.032 7.613 C 49.032 7.29 48.968 6.968 48.839 6.774 C 48.71 6.581 48.581 6.387 48.387 6.323 C 48.194 6.194 48 6.129 47.742 6.129 C 47.484 6.065 47.226 6.065 46.968 6.065 C 46.323 6.065 45.871 6.194 45.484 6.452 C 45.097 6.71 44.903 7.161 44.839 7.806 L 41.742 7.806 L 41.742 8 Z  M 65.097 4.387 L 65.097 5.935 L 65.161 5.935 C 65.549 5.355 66.065 4.903 66.645 4.516 C 67.226 4.194 67.936 4 68.645 4 C 69.355 4 70.065 4.129 70.645 4.452 C 71.226 4.71 71.742 5.226 72 5.935 C 72.323 5.419 72.839 4.968 73.42 4.581 C 74 4.194 74.71 4 75.484 4 C 76.065 4 76.645 4.065 77.161 4.194 C 77.678 4.323 78.129 4.581 78.516 4.903 C 78.903 5.226 79.161 5.677 79.42 6.194 C 79.613 6.71 79.742 7.355 79.742 8.129 L 79.742 15.871 L 76.581 15.871 L 76.581 9.419 C 76.581 9.032 76.581 8.645 76.516 8.323 C 76.516 8 76.387 7.677 76.258 7.419 C 76.129 7.161 75.936 6.968 75.678 6.839 C 75.42 6.71 75.032 6.645 74.645 6.645 C 74.194 6.645 73.807 6.71 73.549 6.903 C 73.29 7.097 73.032 7.29 72.903 7.548 C 72.774 7.806 72.645 8.129 72.581 8.516 C 72.516 8.839 72.516 9.226 72.516 9.548 L 72.516 16 L 69.355 16 L 69.355 9.484 C 69.355 9.161 69.355 8.774 69.355 8.452 C 69.355 8.129 69.29 7.806 69.161 7.548 C 69.032 7.29 68.839 7.032 68.581 6.839 C 68.323 6.645 67.936 6.581 67.42 6.581 C 67.29 6.581 67.097 6.645 66.839 6.71 C 66.581 6.774 66.323 6.903 66.129 7.097 C 65.871 7.29 65.678 7.548 65.549 7.935 C 65.355 8.258 65.29 8.774 65.29 9.29 L 65.29 16 L 62.129 16 L 62.129 4.387 L 65.097 4.387 L 65.097 4.387 Z  M 88.516 10.323 C 88.387 10.452 88.194 10.516 88 10.581 C 87.807 10.645 87.613 10.71 87.355 10.774 C 87.097 10.839 86.903 10.839 86.645 10.903 C 86.387 10.903 86.129 10.968 85.871 11.032 C 85.613 11.097 85.42 11.161 85.161 11.226 C 84.903 11.29 84.71 11.419 84.581 11.548 C 84.387 11.677 84.258 11.806 84.194 12 C 84.065 12.194 84.065 12.452 84.065 12.71 C 84.065 12.968 84.129 13.226 84.194 13.419 C 84.323 13.613 84.452 13.742 84.645 13.871 C 84.839 14 85.032 14.065 85.29 14.129 C 85.549 14.194 85.807 14.194 86 14.194 C 86.645 14.194 87.097 14.065 87.484 13.871 C 87.807 13.677 88.065 13.419 88.258 13.097 C 88.452 12.774 88.516 12.516 88.581 12.194 C 88.645 11.871 88.645 11.677 88.645 11.484 L 88.645 10.323 L 88.516 10.323 Z  M 81.161 8 C 81.226 7.226 81.42 6.645 81.742 6.129 C 82.065 5.613 82.516 5.226 82.968 4.968 C 83.484 4.645 84.065 4.452 84.71 4.323 C 85.355 4.194 86 4.129 86.645 4.129 C 87.226 4.129 87.807 4.194 88.387 4.258 C 88.968 4.323 89.549 4.516 90 4.71 C 90.516 4.968 90.903 5.29 91.226 5.677 C 91.549 6.129 91.678 6.645 91.678 7.355 L 91.678 13.355 C 91.678 13.871 91.678 14.387 91.742 14.839 C 91.807 15.29 91.936 15.677 92.065 15.935 L 88.839 15.935 C 88.774 15.742 88.71 15.548 88.71 15.355 C 88.645 15.161 88.645 14.968 88.645 14.774 C 88.129 15.29 87.549 15.677 86.839 15.871 C 86.129 16.065 85.42 16.194 84.71 16.194 C 84.129 16.194 83.613 16.129 83.161 16 C 82.71 15.871 82.258 15.677 81.936 15.355 C 81.549 15.097 81.29 14.71 81.097 14.258 C 80.903 13.806 80.774 13.29 80.774 12.71 C 80.774 12.065 80.903 11.484 81.097 11.097 C 81.355 10.645 81.613 10.323 82 10.065 C 82.387 9.806 82.774 9.613 83.226 9.484 C 83.678 9.355 84.194 9.226 84.645 9.161 C 85.097 9.097 85.613 9.032 86.065 8.968 C 86.516 8.903 86.968 8.839 87.29 8.774 C 87.678 8.71 87.936 8.581 88.129 8.387 C 88.323 8.194 88.452 7.935 88.452 7.613 C 88.452 7.29 88.387 6.968 88.258 6.774 C 88.129 6.581 88 6.387 87.807 6.323 C 87.613 6.194 87.42 6.129 87.161 6.129 C 86.903 6.065 86.645 6.065 86.387 6.065 C 85.742 6.065 85.29 6.194 84.903 6.452 C 84.516 6.71 84.323 7.161 84.258 7.806 L 81.161 7.806 L 81.161 8 Z  M 98.452 6.516 C 97.936 6.516 97.549 6.645 97.161 6.839 C 96.839 7.097 96.516 7.355 96.323 7.742 C 96.129 8.129 95.936 8.516 95.871 8.968 C 95.807 9.419 95.742 9.871 95.742 10.258 C 95.742 10.645 95.807 11.097 95.871 11.548 C 95.936 12 96.129 12.387 96.323 12.71 C 96.516 13.032 96.774 13.355 97.161 13.548 C 97.484 13.742 97.936 13.871 98.387 13.871 C 99.161 13.871 99.742 13.677 100.129 13.226 C 100.516 12.774 100.774 12.258 100.903 11.484 L 104 11.484 C 103.807 13.032 103.161 14.194 102.194 15.032 C 101.226 15.871 99.936 16.258 98.387 16.258 C 97.549 16.258 96.71 16.129 96 15.806 C 95.29 15.484 94.645 15.097 94.129 14.581 C 93.613 14.065 93.226 13.419 92.968 12.71 C 92.71 12 92.516 11.161 92.516 10.323 C 92.516 9.419 92.645 8.581 92.903 7.806 C 93.161 7.032 93.549 6.387 94.065 5.806 C 94.581 5.226 95.161 4.839 95.936 4.516 C 96.645 4.194 97.484 4.065 98.452 4.065 C 99.161 4.065 99.807 4.129 100.452 4.323 C 101.097 4.516 101.678 4.774 102.129 5.161 C 102.645 5.548 103.032 6 103.355 6.516 C 103.678 7.032 103.871 7.677 103.871 8.452 L 100.774 8.452 C 100.581 7.161 99.807 6.516 98.452 6.516 Z  M 109.161 19.419 C 108.581 19.806 107.678 20 106.581 20 C 106.258 20 105.936 20 105.613 19.935 C 105.29 19.935 104.968 19.871 104.645 19.871 L 104.645 17.226 C 104.968 17.226 105.226 17.29 105.549 17.29 C 105.871 17.29 106.194 17.355 106.516 17.29 C 106.903 17.226 107.226 17.097 107.42 16.774 C 107.613 16.516 107.742 16.194 107.742 15.806 C 107.742 15.548 107.678 15.29 107.613 15.097 L 103.549 4.258 L 106.903 4.258 L 109.549 12.194 L 109.613 12.194 L 112.129 4.258 L 115.42 4.258 L 110.581 17.419 C 110.258 18.387 109.807 19.032 109.161 19.419 Z  M 116.387 3.871 C 116.645 3.097 116.968 2.452 117.484 1.871 C 117.936 1.29 118.581 0.839 119.29 0.516 C 120 0.194 120.839 0.065 121.807 0.065 C 122.516 0.065 123.226 0.194 123.871 0.387 C 124.516 0.581 125.097 0.903 125.613 1.355 C 126.129 1.742 126.516 2.258 126.774 2.903 C 127.097 3.484 127.226 4.194 127.226 4.968 C 127.226 5.742 127.097 6.452 126.839 7.032 C 126.581 7.613 126.258 8.129 125.807 8.516 C 125.42 8.968 124.903 9.355 124.387 9.742 C 123.871 10.129 123.355 10.452 122.774 10.774 C 122.258 11.097 121.742 11.484 121.226 11.935 C 120.71 12.323 120.258 12.839 119.871 13.355 L 127.29 13.355 L 127.29 16.065 L 115.807 16.065 C 115.807 15.161 115.936 14.387 116.194 13.677 C 116.452 13.032 116.839 12.387 117.226 11.871 C 117.678 11.355 118.194 10.839 118.774 10.387 C 119.355 9.935 120 9.484 120.71 9.032 C 121.032 8.774 121.42 8.581 121.807 8.323 C 122.194 8.065 122.581 7.806 122.839 7.484 C 123.161 7.161 123.42 6.839 123.678 6.452 C 123.871 6.065 124 5.677 124 5.161 C 124 4.387 123.807 3.806 123.355 3.355 C 122.903 2.903 122.323 2.71 121.678 2.71 C 121.226 2.71 120.839 2.839 120.516 3.032 C 120.194 3.226 119.936 3.548 119.742 3.871 C 119.549 4.194 119.42 4.581 119.355 5.032 C 119.29 5.484 119.226 5.871 119.226 6.323 L 116.194 6.323 C 116.065 5.419 116.129 4.581 116.387 3.871 Z  M 40.129 6.903 C 40 6.323 39.807 5.806 39.484 5.419 C 39.161 5.032 38.71 4.71 38.194 4.452 C 37.678 4.194 36.968 4.129 36.129 4.129 C 35.549 4.129 34.903 4.258 34.323 4.581 C 33.678 4.903 33.161 5.355 32.774 6.065 L 32.71 6.065 L 32.71 0 L 29.549 0.903 L 29.549 16 L 32.71 16 L 32.71 9.935 C 32.71 8.774 32.903 7.935 33.29 7.419 C 33.678 6.903 34.323 6.645 35.161 6.645 C 35.936 6.645 36.452 6.903 36.774 7.355 C 37.097 7.806 37.226 8.516 37.226 9.484 L 37.226 16 L 40.387 16 L 40.387 8.903 C 40.323 8.129 40.258 7.484 40.129 6.903 Z "
                fill="currentColor"
              />
              <path
                d=" M 138.258 0.968 L 138.258 9.935 C 138.258 11.161 138 12 137.549 12.581 C 137.097 13.161 136.194 13.419 134.968 13.419 C 134.258 13.419 133.678 13.29 133.226 13.097 C 132.774 12.903 132.452 12.645 132.258 12.323 C 132 12 131.871 11.613 131.807 11.226 C 131.742 10.839 131.678 10.387 131.678 9.935 L 131.678 0 L 128.129 0.968 L 128.129 9.935 C 128.129 12.129 128.71 13.742 129.936 14.774 C 131.097 15.806 132.774 16.323 134.968 16.323 C 137.097 16.323 138.774 15.806 140 14.774 C 141.226 13.742 141.807 12.129 141.807 9.935 L 141.807 0 L 138.258 0.968 L 138.258 0.968 Z  M 60.581 4.129 C 60.194 4.129 59.807 4.194 59.42 4.323 C 59.032 4.452 58.71 4.581 58.387 4.839 C 58.065 5.032 57.742 5.29 57.484 5.613 C 57.226 5.935 57.032 6.258 56.903 6.581 L 56.839 6.581 L 56.839 4.387 L 53.807 5.226 L 53.807 15.935 L 56.968 15.935 L 56.968 10.71 C 56.968 10.194 57.032 9.677 57.097 9.226 C 57.226 8.774 57.355 8.387 57.613 8.065 C 57.871 7.742 58.194 7.484 58.581 7.29 C 58.968 7.097 59.484 6.968 60.065 6.968 C 60.258 6.968 60.452 6.968 60.645 7.032 C 60.839 7.032 61.032 7.097 61.161 7.097 L 61.161 4.194 C 61.032 4.129 60.774 4.129 60.581 4.129 Z "
                fill="currentColor"
              />
              <path
                d=" M 8 8 L 12 8 L 12 12 L 8 12 L 8 8 Z  M 8 0 L 12 0 L 12 4 L 8 4 L 8 0 Z  M 0 8 L 4 8 L 4 12 L 0 12 L 0 8 Z  M 0 0 L 4 0 L 4 4 L 0 4 L 0 0 Z "
                fill="currentColor"
              />
            </g>
          </svg>
        </div>

        <div className="flex justify-center items-center h-16 border py-16 rounded-2xl border-slate-400">
          <Image
            src="/logos/USW.svg"
            width={58}
            height={60}
            alt="University of South Wales"
          />
        </div>
      </div>
    </>
  );
}
