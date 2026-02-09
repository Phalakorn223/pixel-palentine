import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import AcceptedState from "../AcceptedState";

describe("AcceptedState", () => {
    it("renders the success message", () => {
        render(<AcceptedState />);
        expect(screen.getByText(/เย้ ~~ รักนะค้าบบบบบ/i)).toBeDefined();
    });

    it("shows the QR code", () => {
        render(<AcceptedState />);
        const qr = screen.getByAltText(/QR Code PromptPay/i);
        expect(qr).toBeDefined();
    });
});
