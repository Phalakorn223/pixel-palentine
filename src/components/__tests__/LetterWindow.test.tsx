import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import LetterWindow from "../LetterWindow";

describe("LetterWindow", () => {
    it("calls onAccept when YES button is clicked", () => {
        const onAccept = vi.fn();
        render(<LetterWindow onAccept={onAccept} />);

        const yesButton = screen.getByText(/YES/i);
        fireEvent.click(yesButton);

        expect(onAccept).toHaveBeenCalled();
    });

    it("renders the initial question correctly", () => {
        render(<LetterWindow onAccept={() => { }} />);
        expect(screen.getByText(/Will you be my Valentine\?/i)).toBeDefined();
    });
});
