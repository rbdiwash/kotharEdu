import { useState, useEffect } from "react";
import axios from "../Utils/Axios";
const useStatesAndActions = () => {
  const [destinations, setDestinations] = useState([]);
  const [services, setServices] = useState([]);
  const [uniList, setUniList] = useState([]);
  const [testimonial, setTestimonial] = useState([]);
  const [events, setEvents] = useState([]);
  const [news, setNews] = useState([]);

  const getServices = () => {
    axios
      .get("/services")
      .then((res) => {
        setServices(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getUniversities = () => {
    axios
      .get("/universities")
      .then((res) => {
        setUniList(res?.data?.universities);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getTestimonial = () => {
    axios
      .get("/testimonials")
      .then((res) => {
        // console.log(res);
        setTestimonial(res?.data?.testimonials?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getDestinations = () => {
    axios
      .get("/destinations")
      .then((res) => {
        setDestinations(res?.data?.destinations);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getEvents = () => {
    axios
      .get("events")
      .then((res) => {
        // console.log(res);
        setEvents(res?.data?.events);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getNews = () => {
    axios
      .get("news")
      .then((res) => {
        // console.log(res);
        setNews(res?.data?.news?.reverse());
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getServices();
    getUniversities();
    getTestimonial();
    getDestinations();
    getEvents();
    getNews();
  }, []);

  const state = { destinations, services, uniList, testimonial, events, news };

  const actions = {
    setDestinations,
    setServices,
    setEvents,
    setNews,
    setUniList,
    setTestimonial,
    getServices,
    getEvents,
    getDestinations,
    getNews,
    getTestimonial,
    getUniversities,
  };
  return [state, actions];
};

export default useStatesAndActions;
