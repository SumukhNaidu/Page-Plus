#  Page Pulse

**Page Pulse** is a full-stack web application that analyzes a website's SEO and basic performance metrics. Users simply enter a website URL, and the application generates a report containing key SEO insights, accessibility checks, and performance information.

---

##  Features

-  Analyze any valid website URL
-  Extract page title
-  Detect meta description
-  Count H1 tags
-  Count total images
-  Detect images missing `alt` attributes
-  Calculate page word count
-  Measure response time
-  Generate SEO score
-  Proper error handling for invalid URLs and failed requests
-  Responsive and modern UI

---

## 🛠 Tech Stack

### Frontend
- React
- Vite
- Axios
- CSS

### Backend
- Node.js
- Express.js
- Axios
- Cheerio
- Validator

### Testing
- Jest
- Supertest

---

##  Project Structure

```
page-pulse/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── tests/
│   ├── app.js
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

##  Installation

### Clone the repository

```bash
git clone <your-repository-url>
```

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

##  API Endpoint

### Analyze Website

**POST**

```
/api/analyze
```

Request

```json
{
  "url": "https://www.wikipedia.org"
}
```

Sample Response

```json
{
  "success": true,
  "timestamp": "...",
  "report": {
    "status": 200,
    "responseTime": {
      "milliseconds": 316,
      "seconds": "0.32"
    },
    "seo": {
      "title": "Wikipedia",
      "metaDescription": "...",
      "h1Count": 1
    },
    "images": {
      "total": 1,
      "missingAlt": 1
    },
    "wordCount": 1039
  }
}
```

---

##  Testing

Run

```bash
npm test
```

Current Results

- ✅ GET endpoint
- ✅ Missing URL validation
- ✅ Invalid URL validation

All tests are passing successfully.

---

##  Future Improvements

- Lighthouse integration
- Additional SEO metrics
- Accessibility score
- Performance charts
- PDF report export
- User authentication
- Analysis history

---

##  Author

Developed as part of the **Digital Heroes Technical Assessment**.
