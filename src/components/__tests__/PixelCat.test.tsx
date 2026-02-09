import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import PixelCat from "../PixelCat";

describe("PixelCat", () => {
    it("renders natural cat by default", () => {
        render(<PixelCat />);
        const img = screen.getByRole("img");
        expect(img.getAttribute("src")).toContain("pixel-cat");
    });

    it("renders happy cat when happy prop is true", () => {
        render(<PixelCat happy />);
        const img = screen.getByRole("img");
        expect(img.getAttribute("src")).toContain("pixel-cat-happy");
    });
});
