const WEB3FORMS_ACCESS_KEY = "298eb7ce-d6e1-4fa5-9804-748bacc8f460";

interface Web3FormsData {
  [key: string]: string;
}

export async function submitWeb3Form(data: Web3FormsData): Promise<{ success: boolean; message: string }> {
  const formData = new FormData();
  formData.append("access_key", WEB3FORMS_ACCESS_KEY);
  Object.entries(data).forEach(([key, value]) => {
    formData.append(key, value);
  });

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    const result = await response.json();
    return {
      success: result.success === true,
      message: result.message || (result.success ? "Submitted successfully" : "Submission failed"),
    };
  } catch {
    return { success: false, message: "Network error. Please try again." };
  }
}
