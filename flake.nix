{
  description = "Astro Starlight documentation website";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs {
          inherit system;
        };
      in
      {
        devShells.default = pkgs.mkShell {
          # Node 24 is the LTS line Astro currently targets.
          # pnpm comes from nixpkgs rather than corepack because the
          # binaries corepack downloads are dynamically linked against a
          # non-Nix libc and won't run on NixOS.
          packages = with pkgs; [
            nodejs_24
            pnpm
          ];

          # Default to the local dev URL so Astro's RSS/sitemap/canonical
          # links point at the dev server rather than the production domain.
          # Set SITE_URL to the real domain when deploying.
          shellHook = ''
            export SITE_URL="''${SITE_URL:-http://localhost:4321}"
          '';
        };
      });
}
