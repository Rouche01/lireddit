import { Post } from "src/entities/Post";
import { MyContext } from "src/types";
import { Ctx, Query, Resolver } from "type-graphql";

@Resolver()
export class PostResolver {
    @Query(() => [Post])
    async posts(
        @Ctx()
        { em }: MyContext
    ) {
        return await em.find(Post, {});
    }
}