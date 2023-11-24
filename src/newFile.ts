import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";

export default (() => {
const __VLS_setup = async () => {
const auth = useAuthStore();
const router = useRouter();

const onLogout = () => {
auth.logout();
router.push("/login");
};

const showAlert = () => {
[
alert, "Anda harus login untuk mengakses halaman ini!"
];
}; // Menampilkan alert

const __VLS_publicComponent = (await import('vue')).defineComponent({
setup() {
return {};
},
});

const __VLS_componentsOption = {};

let __VLS_name!: 'App';
function __VLS_template() {
let __VLS_ctx!: InstanceType<import('./__VLS_types.js').PickNotAny<typeof __VLS_publicComponent, new () => {}>> & InstanceType<import('./__VLS_types.js').PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_localComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption & typeof __VLS_ctx;
let __VLS_otherComponents!: typeof __VLS_localComponents & import('./__VLS_types.js').GlobalComponents;
let __VLS_own!: import('./__VLS_types.js').SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & typeof __VLS_publicComponent & (new () => { $slots: typeof __VLS_slots; }) >;
let __VLS_components!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_templateComponents!: {} &
import('./__VLS_types.js').WithComponent<'RouterLink', typeof __VLS_components, 'RouterLink', 'routerLink', 'router-link'> &
import('./__VLS_types.js').WithComponent<'RouterView', typeof __VLS_components, 'RouterView', 'routerView', 'router-view'>;
__VLS_components.RouterLink; __VLS_components.RouterLink; __VLS_components.RouterLink; __VLS_components.RouterLink; __VLS_components.RouterLink; __VLS_components.RouterLink; __VLS_components.RouterLink; __VLS_components.RouterLink; __VLS_components.routerLink; __VLS_components.routerLink; __VLS_components.routerLink; __VLS_components.routerLink; __VLS_components.routerLink; __VLS_components.routerLink; __VLS_components.routerLink; __VLS_components.routerLink; __VLS_components['router-link']; __VLS_components['router-link']; __VLS_components['router-link']; __VLS_components['router-link']; __VLS_components['router-link']; __VLS_components['router-link']; __VLS_components['router-link']; __VLS_components['router-link'];
// @ts-ignore
[RouterLink, RouterLink, RouterLink, RouterLink, RouterLink, RouterLink, RouterLink, RouterLink,];
__VLS_components.RouterView; __VLS_components.RouterView; __VLS_components.routerView; __VLS_components.routerView; __VLS_components['router-view']; __VLS_components['router-view'];
// @ts-ignore
[RouterView, RouterView,];
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("flex flex-col container mx-auto p-4 gap-10"), };
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("flex justify-between"), };
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("flex gap-4"), };
{
__VLS_templateComponents.RouterLink;
(__VLS_x as import('./__VLS_types.js').ComponentProps<typeof __VLS_templateComponents.RouterLink>) = { to: ("/"), };
}
{
__VLS_templateComponents.RouterLink;
(__VLS_x as import('./__VLS_types.js').ComponentProps<typeof __VLS_templateComponents.RouterLink>) = { to: ("/about"), };
}
if (__VLS_ctx.auth.username) {
// @ts-ignore
[auth,];
{
__VLS_templateComponents.RouterLink;
(__VLS_x as import('./__VLS_types.js').ComponentProps<typeof __VLS_templateComponents.RouterLink>) = { to: ("/restricted"), };
}
}
else {
{
({} as JSX.IntrinsicElements).p;
({} as JSX.IntrinsicElements).p;
(__VLS_x as JSX.IntrinsicElements)['p'] = { class: ("cursor-pointer"), };
type __VLS_0 = JSX.IntrinsicElements['p'];
const __VLS_1: import('./__VLS_types.js').EventObject<typeof undefined, 'click', {}, __VLS_0['onClick']> = {
click: (__VLS_ctx.showAlert)
};
// @ts-ignore
[showAlert,];
}
}
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("flex gap-2 items-center"), };
if (__VLS_ctx.auth.username) {
// @ts-ignore
[auth,];
{
({} as JSX.IntrinsicElements).p;
({} as JSX.IntrinsicElements).p;
(__VLS_x as JSX.IntrinsicElements)['p'] = {};
(__VLS_ctx.auth.username);
// @ts-ignore
[auth,];
}
}
if (__VLS_ctx.auth.username) {
// @ts-ignore
[auth,];
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = {};
{
({} as JSX.IntrinsicElements).button;
({} as JSX.IntrinsicElements).button;
(__VLS_x as JSX.IntrinsicElements)['button'] = { class: ("bg-red-500 text-white py-1 px=3"), to: ("/login"), };
type __VLS_2 = JSX.IntrinsicElements['button'];
const __VLS_3: import('./__VLS_types.js').EventObject<typeof undefined, 'click', {}, __VLS_2['onClick']> = {
click: $event => {
__VLS_ctx.onLogout();
}
};
// @ts-ignore
[onLogout,];
}
}
}
else {
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = {};
{
__VLS_templateComponents.RouterLink;
(__VLS_x as import('./__VLS_types.js').ComponentProps<typeof __VLS_templateComponents.RouterLink>) = { class: ("bg-blue-500 text-white py-1 px-3"), to: ("/login"), };
}
}
}
}
}
{
__VLS_templateComponents.RouterView;
(__VLS_x as import('./__VLS_types.js').ComponentProps<typeof __VLS_templateComponents.RouterView>) = {};
}
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
declare var __VLS_slots: {};
return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
setup() {
return {
auth: auth,
onLogout: onLogout,
showAlert: showAlert,
};
},
});
return {} as typeof __VLS_publicComponent;
};
return {} as typeof __VLS_setup extends () => Promise<infer T> ? T : never;
})({} as any);
