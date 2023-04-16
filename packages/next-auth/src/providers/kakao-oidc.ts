import type { OAuthConfig, OAuthUserConfig } from "."
import { KakaoProfile } from "./kakao";

export default function KakaoOIDC<P extends KakaoProfile>(
    options: OAuthUserConfig<P>
): OAuthConfig<P> {
    return {
        id: "kakao-oidc",
        name: "Kakao",
        type: "oauth",
        wellKnown: "https://kauth.kakao.com/.well-known/openid-configuration",
        idToken: true,
        client: {
            token_endpoint_auth_method: "client_secret_post"
        },
        profile(profile) {
            return {
                id: profile.sub,
                name: profile.nickname,
                email: profile.email,
                image: profile.picture
            }
        },
        options,
    }
}