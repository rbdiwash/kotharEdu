import { useState, useEffect } from "react";
import axios from "../Utils/Axios";
const useStatesAndActions = () => {
  const [destinations, setDestinations] = useState([]);
  const [services, setServices] = useState([]);
  const [uniList, setUniList] = useState([]);
  const [testimonial, setTestimonial] = useState([]);
  const [events, setEvents] = useState([]);
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get("/services")
      .then((res) => {
        setServices(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("/universities")
      .then((res) => {
        setUniList(res?.data?.universities);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("/testimonials")
      .then((res) => {
        // console.log(res);
        setTestimonial(res?.data?.testimonials?.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("/destinations")
      .then((res) => {
        setDestinations(res?.data?.destinations);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("events")
      .then((res) => {
        // console.log(res);
        setEvents(res?.data?.events);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("news")
      .then((res) => {
        // console.log(res);
        setNews(res?.data?.news);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const state = { destinations, services, uniList, testimonial, events, news };

  const actions = { setDestinations, setServices, setUniList, setTestimonial };
  return [state, actions];
};

export default useStatesAndActions;
