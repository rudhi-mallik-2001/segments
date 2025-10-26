
```markdown
# React Segment Builder

A simple React application to create segments with dynamic schemas.  
Built with **React**, **Redux Toolkit**, and **Tailwind CSS**.

---

## Features

- **Save Segment** button to open a right sidebar modal.
- Add a **segment name**.
- Add multiple **schemas** dynamically from a dropdown.
- Newly added schemas appear in a blue box and can be edited.
- Prevent selecting the same schema multiple times.
- Send the segment data to a **server/webhook** in JSON format.
- Redux store integration to save segment data.

---

---

## Installation

1. Clone the repository or download the folder manually.
2. Navigate to the project folder in your terminal.
3. Install dependencies:

```bash
npm install
````

4. Start the development server:

```bash
npm run dev
```

Your app should now be running at [http://localhost:5173](http://localhost:5173) (Vite default).

---

## Important Note

Before running the project, **update your webhook URL** in `src/utils/api.js`:

```javascript
// src/utils/api.js
export const sendSegmentData = async (data) => {
  try {
    const res = await fetch("/api/YOUR_GENERATED_ID", { // <-- Replace YOUR_GENERATED_ID
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    console.log("Data sent successfully", res.status);
  } catch (error) {
    console.error("Error sending data", error);
  }
};
```

* Go to [https://webhook.site/](https://webhook.site/) to generate your own webhook URL.
* Replace the placeholder `YOUR_GENERATED_ID` with your webhook ID.

---

## Usage

1. Click the **Save Segment** button on the dashboard.
2. Enter a **segment name**.
3. Select a schema from the dropdown and click **+ Add new schema**.
4. Repeat to add multiple schemas dynamically.
5. Click **Save the Segment** to send the data to your webhook and store it in Redux.

---

## Sample Data Sent

```json
{
  "segment_name": "last_10_days_blog_visits",
  "schema": [
    {"first_name": "First Name"},
    {"last_name": "Last Name"}
  ]
}
```

---

## Technologies Used

* React 18
* Redux Toolkit
* Tailwind CSS
* Vite

---

## Screenshots

* Dashboard with **Save Segment** button
* Right sidebar modal with dynamic schema addition

---

