export const sendSegmentData = async (data) => {
  try {
    const res = await fetch("/api/49485054-0efc-4932-8cfa-b510745edb85", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    console.log("✅ Data sent successfully", res.status);
  } catch (error) {
    console.error("❌ Error sending data", error);
  }
};
