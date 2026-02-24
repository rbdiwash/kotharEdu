import { format } from "date-fns/esm";
import React, { useEffect, useState } from "react";
import {
  BiChevronLeft,
  BiChevronRight,
  BiCalendar,
  BiTime,
  BiUser,
} from "react-icons/bi";
import { FiShare2, FiBookmark, FiArrowLeft } from "react-icons/fi";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";
import TakePartEvent from "../Components/TakePartEvent";
import useKothar from "../context/useKothar";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const LOADER_MIN_MS = 2500;

const stripHtml = (html) => {
  if (!html || typeof html !== "string") return "";
  if (typeof document === "undefined")
    return html
      .replace(/<[^>]*>/g, "")
      .trim()
      .slice(0, 160);
  const tmp = document.createElement("div");
  tmp.innerHTML = html;
  return tmp.textContent?.trim() || tmp.innerText?.trim() || "";
};

const IndividualNews = () => {
  const { id } = useParams();
  const [{ news }] = useKothar();
  const [showNotFound, setShowNotFound] = useState(false);

  const newsData = news?.find((item) => item?.id === id);
  const currentIndex = news?.findIndex((item) => item?.id === id) ?? -1;
  const prevArticle = currentIndex > 0 ? news[currentIndex - 1] : null;
  const nextArticle =
    currentIndex >= 0 && currentIndex < (news?.length ?? 0) - 1
      ? news[currentIndex + 1]
      : null;
  const shortTitle = (title) =>
    title?.length > 90 ? `${title.slice(0, 90)}…` : title || "";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (newsData) {
      setShowNotFound(false);
      return;
    }
    const timer = setTimeout(() => setShowNotFound(true), LOADER_MIN_MS);
    return () => clearTimeout(timer);
  }, [newsData, news?.length, id]);

  document.title = newsData?.topic
    ? `${newsData.topic} - News - Kothar Education`
    : "News & Updates - Kothar Education";

  const pageTitle = newsData?.topic
    ? `${newsData.topic} - News - Kothar Education`
    : "News - Kothar Education";
  const pageDescription = newsData
    ? stripHtml(newsData.description).slice(0, 160) || newsData.topic
    : "Latest news and updates from Kothar Education.";
  const shareUrl =
    // typeof window !==
    // "undefined"
    // ? `${window.location.origin}/news/${id}`
    `https://kotharedu.com/news/${id}`;
  const origin =
    typeof window !== "undefined"
      ? window.location.origin
      : "https://kotharedu.com";
  const imageUrl = newsData?.image
    ? newsData.image.startsWith("http")
      ? newsData.image
      : `${origin}${newsData.image}`
    : `${origin}/kothar_logo.png`;

  if (newsData) {
    document.title = pageTitle;
  }

  const handleCopyShare = () => {
    const url =
      shareUrl || (typeof window !== "undefined" ? window.location.href : "");
    navigator.clipboard
      ?.writeText(url)
      .then(() => toast.success("Link copied to clipboard!"))
      .catch(() => toast.error("Could not copy link"));
  };

  if (!showNotFound && !newsData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mb-6" />
          <p className="text-gray-600 font-medium">Loading article...</p>
        </div>
      </div>
    );
  }

  if (!newsData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 flex items-center justify-center">
        <Helmet>
          <title>News Not Found - Kothar Education</title>
        </Helmet>
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            News Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            The news article you're looking for doesn't exist.
          </p>
          <Link
            to="/news"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-second text-white px-6 py-3 rounded-lg font-semibold hover:from-second hover:to-primary transition-all duration-300"
          >
            <FiArrowLeft className="text-lg" />
            Back to News
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={`${origin}/news/${id}`} />
        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={shareUrl} />
        <meta property="og:title" content={newsData.topic} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:site_name" content="Kothar Education" />
        {newsData?.date && (
          <meta
            property="article:published_time"
            content={new Date(newsData.date).toISOString()}
          />
        )}
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={shareUrl} />
        <meta name="twitter:title" content={newsData.topic} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={imageUrl} />
      </Helmet>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${newsData?.image})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
        </div>

        <div className="container mx-auto md:px-6 relative z-10 py-4 px-2">
          {/* Breadcrumb */}
          <div className="mb-8">
            <div className="flex items-center space-x-2 text-white/90 text-sm">
              <Link
                to="/"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </Link>
              <BiChevronRight className="text-lg" />
              <Link
                to="/news"
                className="hover:text-white transition-colors duration-300"
              >
                News
              </Link>
              <BiChevronRight className="text-lg" />
              <span className="text-white font-semibold">Article</span>
            </div>
          </div>

          {/* Article Header */}
          <div className="max-w-4xl">
            {/* Date and Category */}
            <div className="flex items-center md:gap-4 gap-2 flex-wrap md:mb-6 mb-3">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <BiCalendar className="text-white text-lg" />
                <span className="text-white font-medium">
                  {format(new Date(newsData?.date || null), "MMMM dd, yyyy")}
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <BiTime className="text-white text-lg" />
                <span className="text-white font-medium">5 min read</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {newsData?.topic}
            </h1>

            {/* Action Buttons */}
            <div className="flex items-center md:gap-4 gap-2 flex-wrap">
              <button
                type="button"
                onClick={handleCopyShare}
                className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white hover:bg-white/30 transition-all duration-300"
              >
                <FiShare2 className="text-lg" />
                <span>Copy Link</span>
              </button>
              <a
                className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white hover:bg-white/30 transition-all duration-300"
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                title={`Share ${newsData?.topic} on Facebook `}
              >
                <FaFacebook className="text-lg" />
                <span>Share to Facebook</span>
              </a>

              <a
                className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white hover:bg-white/30 transition-all duration-300"
                href={`https://wa.me/?text=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                title={`Share ${newsData?.topic} on LinkedIn `}
              >
                <FaWhatsapp className="text-lg" />
                <span>Share to WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="md:py-20 py-10 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
        <div className="container mx-auto">
          <div className="max-w- mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 overflow-hidden">
              {/* Featured Image */}
              <div className="relative h-96 overflow-hidden">
                <img
                  loading="lazy"
                  src={newsData?.image}
                  alt={newsData?.topic || "News Image"}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Article Body */}
              <div className="md:p-8 p-4">
                {/* Article Meta */}
                <div className="flex items-center justify-between md:mb-8 mb-4 md:pb-6 pb-4 border-b border-gray-200">
                  <div className="flex items-center gap-4 flex-wrap">
                    <div className="flex items-center gap-2 text-gray-600">
                      <BiCalendar className="text-primary" />
                      <span className="text-sm font-medium">
                        {format(
                          new Date(newsData?.date || null),
                          "EEEE, MMMM dd, yyyy",
                        )}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <BiTime className="text-primary" />
                      <span className="text-sm font-medium">5 min read</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={handleCopyShare}
                      className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors duration-300"
                    >
                      <FiShare2 className="text-lg" />
                      <span className="text-sm font-medium">Share</span>
                    </button>
                  </div>
                </div>

                {/* Article Content */}
                <div className="prose prose-lg max-w-none">
                  <div
                    className="text-gray-700 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: newsData?.description }}
                  />
                </div>

                {/* Article Footer */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="flex flex-col gap-6">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <div className="flex items-center gap-4 flex-wrap">
                        <span className="text-gray-600 text-sm">
                          Published by
                        </span>
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                            <BiUser className="text-white text-sm" />
                          </div>
                          <span className="font-semibold text-gray-800">
                            Kothar Education
                          </span>
                        </div>
                      </div>

                      <Link
                        to="/explore/news"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-second text-white px-4 py-2 rounded-lg font-semibold hover:from-second hover:to-primary transition-all duration-300 transform hover:scale-105"
                      >
                        <FiArrowLeft className="text-lg" />
                        Back to News
                      </Link>
                    </div>

                    {(prevArticle || nextArticle) && (
                      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-gray-100">
                        {prevArticle ? (
                          <Link
                            to={`/news/${prevArticle.id}`}
                            className="inline-flex items-center gap-2 text-gray-700 hover:text-primary font-medium transition-colors max-w-[min(100%,18rem)] "
                            title={prevArticle.topic}
                          >
                            <BiChevronLeft className="text-xl shrink-0" />
                            <span className="truncate">
                              {shortTitle(prevArticle.topic)}
                            </span>
                            <span className="text-sm text-gray-500 shrink-0">
                              Previous article
                            </span>
                          </Link>
                        ) : (
                          <span />
                        )}
                        {nextArticle ? (
                          <Link
                            to={`/news/${nextArticle.id}`}
                            className="inline-flex items-center gap-2 text-gray-700 hover:text-primary font-medium transition-colors max-w-[min(100%,18rem)] ml-auto"
                            title={nextArticle.topic}
                          >
                            <span className="text-sm text-gray-500 shrink-0">
                              Read next article
                            </span>
                            <span className="truncate">
                              {shortTitle(nextArticle.topic)}
                            </span>
                            <BiChevronRight className="text-xl shrink-0" />
                          </Link>
                        ) : null}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TakePartEvent />
    </>
  );
};

export default IndividualNews;
