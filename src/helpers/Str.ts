export default class Str
{
    private static illegalCharsRegex: RegExp = /[\/\\\*\|\"\:\<\>\?]/gi;

    public static validateName(name: string) : string
    {
        return name.match(this.illegalCharsRegex) ? name.replace(this.illegalCharsRegex, '$') : name;
    }
}