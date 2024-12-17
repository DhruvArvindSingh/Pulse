export default function email_format(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}