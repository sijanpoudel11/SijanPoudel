import { beforeEach, describe, expect, it, vi } from "vitest";
import publicApi from "./publicApi";
import { sendContactMessage } from "./contactService";

describe("sendContactMessage", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("posts directly to Resend from the browser with the expected payload", async () => {
    const postSpy = vi
      .spyOn(publicApi, "post")
      .mockResolvedValue({ data: { success: true } });

    const payload = {
      name: "Jane Doe",
      email: "jane@example.com",
      message: "Hello from the test",
    };

    await sendContactMessage(payload);

    expect(postSpy).toHaveBeenCalledWith(
      "https://api.resend.com/emails",
      expect.objectContaining({
        from: expect.stringContaining("Portfolio Contact Form"),
        to: ["jane@example.com"],
        subject: expect.stringContaining("New Portfolio Message"),
        html: expect.stringContaining("Hello from the test"),
      }),
    );
  });
});
