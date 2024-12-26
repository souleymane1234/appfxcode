"use client";
import React from "react";
import * as Components from "./Components.js";
import Link from "next/link";
import "../components/styles.css"

function Login() {
  const [signIn, toggle] = React.useState(true);
  return (
    <Components.Container className="">
      <Components.SignUpContainer signinIn={signIn}>
        <Components.Form>
          <Components.Title className="font-serif">Creez votre compte</Components.Title>
          <Components.Input className="font-serif" type="text" placeholder="Name" />
          <Components.Input className="font-serif" type="email" placeholder="Email" />
          <Components.Input className="font-serif" type="password" placeholder="Password" />
          <Link href="/">
            <Components.Button className="font-serif">Inscription</Components.Button>
          </Link>
        </Components.Form>
      </Components.SignUpContainer>

      <Components.SignInContainer signinIn={signIn}>
        <Components.Form>
          <Components.Title className="font-serif">Connectez vous</Components.Title>
          <Components.Input className="font-serif" type="email" placeholder="Email" />
          <Components.Input className="font-serif" type="password" placeholder="Password" />
          <Components.Anchor href="#" className="font-serif">Mot de passe oublié?</Components.Anchor>
          <Link href="/">
            <Components.Button className="font-serif">Connexion</Components.Button>
          </Link>
        </Components.Form>
      </Components.SignInContainer>

      <Components.OverlayContainer signinIn={signIn}>
        <Components.Overlay signinIn={signIn}>
          <Components.LeftOverlayPanel signinIn={signIn}>
            <Components.Title className="font-serif">Bon retour!</Components.Title>
            <Components.Paragraph className="font-serif">
              Pour rester en contact avec nous, veuillez vous connecter
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(true)} className="font-serif">
              Connexion
            </Components.GhostButton>
          </Components.LeftOverlayPanel>

          <Components.RightOverlayPanel signinIn={signIn}>
            <Components.Title className="font-serif">Salut!</Components.Title>
            <Components.Paragraph className="font-serif">
              Bienvenue sur le portail web de AgoPlayce
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(false)} className="font-serif">
              Inscription
            </Components.GhostButton>
          </Components.RightOverlayPanel>
        </Components.Overlay>
      </Components.OverlayContainer>
    </Components.Container>
  );
}

export default Login;
