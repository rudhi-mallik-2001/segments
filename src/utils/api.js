
const WEBHOOKID=`49485054-0efc-4932-8cfa-b510745edb85` //use this one to see 
// const WEBHOOKID=`YOUR_GENERATED_ID`;

export const sendSegmentData = async (data) => {
  try {
    const res = await fetch(`/api/${WEBHOOKID}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    console.log("✅ Data sent successfully", res.status);
  } catch (error) {
    console.error("❌ Error sending data", error);
  }
};


