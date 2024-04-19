updatePreferences = async (email, preferences) => {
        
    const disconnectOldPreferences = prisma.user.update({
        where: {
            email: email,
        },
        data: {
            preferences: {
                set: []
            }
        }
    });

    const connectNewPreferences =  prisma.user.update({
        where: {email: email},
        data: {
            preferences: {
                // connect or create the new preferences
                connectOrCreate: preferences.map((pref) => {
                    return {
                        where: { name: pref },
                        create: { name: pref },
                    };
                }),
            }
        }
    });

    // run it in a transaction
    await prisma.$transaction([
        disconnectOldPreferences, connectNewPreferences ]);
}