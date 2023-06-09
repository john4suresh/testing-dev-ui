/* eslint-disable max-len */
import PageLink from "../components/PageLink";

const StartPage = () => (
    <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
            <div className="space-x-2 flex flex-col gap-4 items-center justify-center">
                <PageLink link="aboutpageone" title="AboutPageOne" />
                <PageLink link="blogpostspageone" title="BlogPostsPageOne" />
                <PageLink link="blogpostspagetwo" title="BlogPostsPageTwo" />
                <PageLink link="blogsone" title="BlogsOne" />
                <PageLink link="blogstwo" title="BlogsTwo" />
                <PageLink link="contactspageone" title="ContactsPageOne" />
                <PageLink link="contactspagtwo" title="ContactsPageTwo" />
                <PageLink link="landingpageone" title="LandingPageOne" />
                <PageLink link="pricingpageone" title="PricingPageOne" />
                <PageLink link="pricingpagetwo" title="PricingPageTwo" />
                <PageLink link="signinpageone" title="SignInPageOne" />
                <PageLink link="signinpagetwo" title="SignInPageTwo" />
                <PageLink link="signinpagethree" title="SignInPageThree" />
                <PageLink link="signinpagefour" title="SignInPageFour" />
                <PageLink link="signuppageone" title="SignUpPageOne" />
                <PageLink link="signuppagetwo" title="SignUpPageTwo" />
                <PageLink link="signuppagethree" title="SignUpPageThree" />
                <PageLink link="signuppagefour" title="SignUpPageFour" />
            </div>
        </div>
    </div>
);

StartPage.displayName = "StartPage";

export default StartPage;
