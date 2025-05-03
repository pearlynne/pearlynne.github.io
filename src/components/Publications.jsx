import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const PublicationItem = ({ authors, title, journal, link, conference, pubDate, location }) => (
  <li className="publication-item">
    <span className="author">{authors}. </span>
    {pubDate && <span className="pubDate">{pubDate}. </span>}
    <span className="title">{title}. </span>
    {journal && <span className="journal">{journal}. {link && <a href={link}>{link}</a> }</span>}
    {conference && <span className="conference">{conference}. </span>}
    {location && <span className="location">{location}. </span>}
  </li>
);

export default PublicationItem;

PublicationItem.propTypes = {
  authors: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  journal: PropTypes.string,
  link: PropTypes.string,
  conference: PropTypes.string,
  pubDate: PropTypes.string,
  location: PropTypes.string,
};

